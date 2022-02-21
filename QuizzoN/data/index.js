const mongoose = require("mongoose");

const mongoConfig = require("../settings").mongoConfig;

const conn = mongoose.connect(mongoConfig.serverUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: mongoConfig.database,
});

mongoose.connection
    .once("open", () =>
        console.log("Connected to mongo server")
    )
    .on("error", (error) => {
        console.log("Mongoose error: " + error);
    });
mongoose.Promise = global.Promise;