const rootRoutes = require("./root");

const constructorMethod = (app) => {
    app.use("/api/", rootRoutes);
};

module.exports = constructorMethod;