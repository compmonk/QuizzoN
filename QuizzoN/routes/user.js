const express = require("express");
const questions = require("../data/questions");
const users = require("../data/users");

const router = express.Router();

router.get("/question", async (request, response) => {
    try {
        const user = request.session.user;
        const question = await questions.getQuestionById(user.questionsPlayed)
        response.send(question);
    } catch (e) {
        response.setHeader("content-type", "application/json");
        response.status(e.http_code).send(e.message);
    }
})

router.post("/question", async (request, response) => {
    try {
        let user = request.session.user;
        const question = await questions.getQuestionById(user.questionsPlayed, null)
        const correct = question["answer"] === request.body["answer"]
        user = await users.updateScoreById(user._id, user.questionsPlayed + 1, user.correctAnswer + (correct ? 1 : 0))
        request.session.user = user
        response.send({correct, question, user});
    } catch (e) {
        response.setHeader("content-type", "application/json");
        response.status(e.http_code).send(e.message);
    }
})

router.get("/leaderboard", async (request, response) => {
    try {
        const scores = await users.getScores();
        response.send(scores);
    } catch (e) {
        response.setHeader("content-type", "application/json");
        response.status(e.http_code).send(e.message);
    }
})

module.exports = router;