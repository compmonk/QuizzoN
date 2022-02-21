const questionModel = require("./models/question");

async function getQuestionById(questionId, projection = {answer: false, explanation: false}) {
    const error = new Error();
    error.http_code = 200;
    const errors = {};

    if (typeof questionId !== "number") {
        errors["user"] = "invalid type of questionId";
        error.http_code = 400;
    }

    if (error.http_code !== 200) {
        error.message = JSON.stringify({errors: errors});
        throw error;
    }
    try {
        let question = await questionModel.findById(questionId, projection)
        if (question == null) {
            errors["question"] = `question with id ${questionId} doesn't exists`;
            error.http_code = 404;
            error.message = JSON.stringify({
                errors: errors,
            });
            throw error;
        }

        return question._doc
    } catch (e) {
        console.log(e)
        error.http_code = 400
        error.message = JSON.stringify(e)
        throw error;
    }
}

module.exports = {
    getQuestionById
};