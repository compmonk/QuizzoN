const express = require("express");
const questions = require("../data/questions");
const users = require("../data/users");

const router = express.Router();

router.get("/question", async (request, response) => {
    // get question for the current user
})

router.post("/question", async (request, response) => {
    // check for answer if correct and update the user's score
})

router.get("/leaderboard", async (request, response) => {
    // get the scores for all user
})

module.exports = router;