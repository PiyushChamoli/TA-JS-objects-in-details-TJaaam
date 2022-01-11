
// - Data:
// - `title` (title of the question)
// - `options` (array of options)
// - `correctAnswerIndex` (index of the correct option)
// - Methods:
// - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
// - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// Without Object

//Data:
let questionOneTitle = xyz;
let questionOneOptions = [];
let questionOneCorrectAnswerIndex = index;
//Methods:
function questionOneisAnswerCorrect (index) {
    return index == questionOneCorrectAnswerIndex;
}
function questionOnegetCorectAnswer () {
    return questionOneOptions[questionOneCorrectAnswerIndex];
}

// Organize using object:
let questionOne = {
    title: xyz,
    option: [],
    coorectAnswerIndex: index,
    isCorrectAnswer(guessindex) {
        return questionOne.coorectAnswerIndex == guessindex;
    },
    getCorrectAnswer() {
        return questionOne.option[questionOne.coorectAnswerIndex];
    }
}

// Use a function to create object:
function createQuestion (title,option,index) {
    let question = {};
    question.title = title;
    question.option = option;
    question.correctAnswerIndex = index;
    question.isCorrectAnswer = function (guessIndex) {
        return question.correctAnswerIndex === guessIndex;
    };
    question.getCorrectAnswer = function () {
        return question.option[question.correctAnswerIndex]
    }
}

//Convert function to use this
function createQuestion (title,option,index) {
    let question = {};
    question.title = title;
    question.option = option;
    question.correctAnswerIndex = index;
    question.isCorrectAnswer = function (guessIndex) {
        return question.correctAnswerIndex === guessIndex;
    };
    question.getCorrectAnswer = function () {
        return question.option[question.correctAnswerIndex]
    }
}
