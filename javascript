(function() {
  var questions = [{
    question: "What roast contains the most caffeine?",
    choices: ["Dark", "Light", "Medium", "Medium-dark"],
    correctAnswer: "Light"
  }, {
    question: "What drink is one part espresso, two parts milk, one part foam?",
    choices: ["Cappuccino", "Macchiato", "Americano", "Latte"],
    correctAnswer: "Latte"
  }, {
    question: "How should you grind beans for a regular coffee maker?",
    choices: ["Fine", "Coarse", "Powder","Whole Bean"],
    correctAnswer: "Fine"
  }, {
    question: "What is the proper temperautre to brew coffee?",
    choices: ["100 F", "50 F", "195 F", "250 F"],
    correctAnswer: "195 F"
  }, {
    question: "What nation does not grow coffee?",
    choices: ["Jamaica", "Vietnam", "Canada", "Ethiopia"],
    correctAnswer: "Canada"
  }];

  var selections = [];
  var quiz = $('#quiz');

  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    return qElement;
  }

  function createButtons(index) {
    var buttonList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="button" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      buttonList.append(item);
    }
    return buttonList;
  }

  function choose() {
    selections[question] = +$('input[name="answer"]:checked').val();
  }

    function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.alert('You got ' + numCorrect + ' questions out of ' +
                 questions.length + 'correct. Enjoy some coffee!');
    return score;
  }
})();
