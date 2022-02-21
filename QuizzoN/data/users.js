const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userModel = require("./models/user");

const salt = bcrypt.genSaltSync(10);

async function addUser(newUser) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (typeof newUser !== "object") {
        errors["user"] = "invalid type of user";
        error.http_code = 400;
    }

    if (!newUser.hasOwnProperty("email")) {
        errors["email"] = "missing property";
        error.http_code = 400;
    } else if (typeof newUser["email"] !== "string") {
        errors["email"] = "invalid type of email";
        error.http_code = 400;
    }

    if (!newUser.hasOwnProperty("password")) {
        errors["password"] = "missing property";
        error.http_code = 400;
    } else if (typeof newUser["password"] !== "string") {
        errors["password"] = "invalid type of email";
        error.http_code = 400;
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({errors: errors});
        throw error;
    }

    try {
        let user = new userModel({
            _id: new mongoose.Types.ObjectId(),
            email: newUser.email,
            password: bcrypt.hashSync(newUser.password, salt),
            questionsPlayed: 0,
            correctAnswer: 0
        });
        const insertInfo = await user.save();
        user = insertInfo._doc;
        delete user["password"]
        return user
    } catch (e) {
        error.http_code = 400
        error.message = JSON.stringify(e)
        throw error;
    }
}

async function loginUser(request) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (typeof request !== "object") {
        errors["user"] = "invalid type of user";
        error.http_code = 400;
    }

    if (!request.hasOwnProperty("email")) {
        errors["email"] = "missing property";
        error.http_code = 400;
    } else if (typeof request["email"] !== "string") {
        errors["email"] = "invalid type of email";
        error.http_code = 400;
    }

    if (!request.hasOwnProperty("password")) {
        errors["password"] = "missing property";
        error.http_code = 400;
    } else if (typeof request["password"] !== "string") {
        errors["password"] = "invalid type of email";
        error.http_code = 400;
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({errors: errors});
        throw error;
    }

    try {
        let user = await userModel.findOne({email: request["email"]})
        if (user === null) {
            errors["email"] = `user with email ${request["email"]} doesn't exists`;
            error.http_code = 404;
            error.message = JSON.stringify({
                errors: errors,
            });
            throw error;
        }

        user = user._doc;
        if (!bcrypt.compareSync(request["password"], user.password)) {
            errors['password'] = "Invalid password";
            error.http_code = 403;
            error.message = JSON.stringify({
                errors: errors
            });
            throw error
        }
        delete user["password"]
        return user;
    } catch (e) {
        error.http_code = 400
        error.message = JSON.stringify(e)
        throw error;
    }
}

async function updateScoreById(userId, questionsPlayed, correctAnswer) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    try {
        let user = await userModel.findByIdAndUpdate(userId, {
            questionsPlayed: questionsPlayed,
            correctAnswer: correctAnswer
        }, {new: true})

        if (user === null) {
            errors["id"] = `user with id ${userId} doesn't exists`;
            error.http_code = 404;
            error.message = JSON.stringify({
                errors: errors,
            });
            throw error;
        }
        user = user._doc
        delete user["password"]
        return user
    } catch (e) {
        throw e
    }
}

async function getScores() {
    try {
        let scores = await userModel.find({}, {password: false}).sort({correctAnswer: -1, questionsPlayed: -1})
        scores = scores.map(score => {
            return {
                ...score._doc,
                total: score.correctAnswer / Math.max(score.questionsPlayed, 1) * 100,
            }
        })
        return scores
    } catch (e) {
        throw e
    }
}

module.exports = {
    addUser,
    loginUser,
    updateScoreById,
    getScores
};