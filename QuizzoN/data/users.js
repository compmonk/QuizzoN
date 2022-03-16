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

    // get the user and update the questionsPlayed and correctAnswer
}

async function getScores() {

    // get scores for all users
}

module.exports = {
    addUser,
    loginUser,
    updateScoreById,
    getScores
};