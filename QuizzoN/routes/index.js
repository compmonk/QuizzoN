const rootRoutes = require("./root");
const userRoutes = require("./user");

const isLoggedIn = function (request) {
    return !!(request && request.session && request.session.user);
};

const constructorMethod = (app) => {
    app.use("/api/", rootRoutes);
    app.use("/api/user/*", function (request, response, next) {
        if (isLoggedIn(request)) {
            next();
        } else {
            response.status(403).send();
        }
    });
    app.use("/api/user/", userRoutes);
};

module.exports = constructorMethod;