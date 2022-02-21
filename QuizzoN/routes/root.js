const express = require("express");

const users = require("../data/users");

const router = express.Router();

router.post("/signup", async (request, response) => {
    try {
        const user = await users.addUser(request.body)
        response.send(user);
    } catch (e) {
        response.setHeader("content-type", "application/json");
        response.status(e.http_code).send(e.message);
    }
});

router.post("/login", async (request, response) => {
    try {
        const user = await users.loginUser(request.body);
        request.session.user = user;
        response.send(user)
    } catch (e) {
        response.setHeader("content-type", "application/json");
        response.status(e.http_code).send(e.message)
    }
});

router.get("/logout", async function (request, response) {
    request.session.destroy(function (err) {
        return response.status(204).send();
    });
});

module.exports = router;