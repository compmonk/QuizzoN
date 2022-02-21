const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.Number,
        unique: true
    },
    questionText: mongoose.Schema.Types.String,
    optionA: mongoose.Schema.Types.String,
    optionB: mongoose.Schema.Types.String,
    optionC: mongoose.Schema.Types.String,
    optionD: mongoose.Schema.Types.String,
    answer: mongoose.Schema.Types.String,
    explanation: mongoose.Schema.Types.String
});

module.exports = mongoose.model("questions", questionSchema);