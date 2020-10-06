const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
  {
    question: "Who invented the Chinese torture box?",
    answers: {
      a: "David Blaine",
      b: "David Copperfield",
      c: "Harry Houdini"
    },
    correctAnswer: "c"
  },
  {
    question: "What is Mario Bros daytime job?",
    answers: {
      a: "A Race Car Driver",
      b: "A Teacher",
      c: "A Plumber"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is Tim Burton?",
    answers: {
      a: "Director",
      b: "Singer",
      c: "Actor",
    },
    correctAnswer: "a"
  },
  {
    question: "Which is the name of the bird in the movie UP?",
    answers: {
      a: "Karl",
      b: "Kevin",
      c: "Sam"
    },
    correctAnswer: "b"
  },
  {
    question: "How old was Michael Jackson when he died?",
    answers: {
      a: "47",
      b: "55",
      c: "50"
    },
    correctAnswer: "c"
  },
  {
    question: "Where does Pooh live?",
    answers: {
      a: "A Tree",
      b: "A Mushroom",
      c: "A House"
    },
    correctAnswer: "a"
  },
  {
    question: "How old is Rapunzel in the movie ‘Tangled’?",
    answers: {
      a: "18",
      b: "15",
      c: "20"
    },
    correctAnswer: "a"
  },
  {
    question: "What year did ‘Thriller’ come out?",
    answers: {
      a: "1980",
      b: "1982",
      c: "1988"
    },
    correctAnswer: "b"
  },
  {
    question: "Which game won the VGX award in 2013?",
    answers: {
      a: "Grand Theft Auto V",
      b: "PubG",
      c: "League Of Legends"
    },
    correctAnswer: "a"
  },
  {
    question: "Who played the character of Edward Scissorhands?",
    answers: {
      a: "Johnny Depp",
      b: "Paul Newman",
      c: "Humphrey Bogart"
    },
    correctAnswer: "a"
  }
];