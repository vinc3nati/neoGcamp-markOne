// console.log("Hello World");

var readlineSync = require('readline-sync');

var name = readlineSync.question("What's Your Name ?");

console.log("Welcome " + name);

var score = 0;

var askAge = readlineSync.question("Is my Age greater than 18 ? ");

if(askAge == "yes") {
  console.log("right");
  score = score + 1;
}
else { 
  console.log("wrong");
  score = score - 1;
}

var askCity = readlineSync.question("Which city do I live in?");

if(askCity == "mumbai") {
  console.log("right");
  score = score + 1;
}
else { 
  console.log("wrong");
  score = score - 1;
}


console.log("Your Score is " + score);


function check(question, answer) {
  var ans = readlineSync.question(question);

  if(ans == answer) {
    console.log("right!");
    score++;
  }
  else {
    console.log("wrong!");
    score--;
  }
  console.log("--------------");
  console.log("Your score is "+ score);
}

var questions = [
  {
    question: "Where do I live ?",
    answer: "Mumbai"
  },
  {
    question: "Who's my favourite superhero",
    answer: "Father"
  },
  {
    question: "Where do I work ?",
    answer: "None"
  }
];

for(var i = 0; i < questions.length; i++){
  check(questions[i].question, questions[i].answer);
}


console.log("Your final score is : " + score);