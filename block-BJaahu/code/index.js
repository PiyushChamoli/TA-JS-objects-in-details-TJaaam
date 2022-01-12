
// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


// Prototypal Pattern


let questionMethods = {
    isAnswerCorrect: function (index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
    }
}

function question (title,options,answer) {
    let qObj = Object.create(questionMethods);
    qObj.title = title;
    qObj.options = options;
    qObj.correctAnswerIndex = answer;
    return qObj;
}

let firstQuestion = question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
let secondQuestion = question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


// Pseudoclassical Pattern


function Question (title,options,answer) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = answer;
}

Question.prototype = {
    isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    },
    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.getCorrectAnswer());


// Class Pattern

class Question {
    constructor (title,options,answer) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = answer
    }
    isAnswerCorrect (index) {
        return index === this.correctAnswerIndex;
    };
    getCorrectAnswer () {
        return this.options[this.correctAnswerIndex];
    }
}
let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

console.log(firstQuestion.getCorrectAnswer());
console.log(secondQuestion.getCorrectAnswer());