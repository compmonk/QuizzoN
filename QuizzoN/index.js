const express = require("express");
const session = require('express-session');
const mongoose = require("mongoose");

require("./data/index");
const configRoutes = require("./routes");
const {secret} = require("./settings.json");

const server = express();
const logger = function (request, response, next) {
    const logString = `\n${new Date().toISOString()}
${request.method}\t${request.originalUrl}
BODY:\n${JSON.stringify(request.body, null, 2)}
QUERY:\t${JSON.stringify(request.query, null, 2)}
PARAM:\t${JSON.stringify(request.params, null, 2)}`;
    console.log(logString);
    next();
};


server.use(express.json())
server.use(express.urlencoded({extended: true}));
server.use(logger);
server.use(
    session({
        name: "AuthCookie",
        secret: secret,
        resave: false,
        saveUninitialized: true,
        genid: function (request) {
            return new mongoose.Types.ObjectId().toString();
        },
    })
);
configRoutes(server);

const port = process.env.PORT || 5000;
server.listen(port, () =>
    console.log(`Your routes will be running on http://localhost:${port}`)
);