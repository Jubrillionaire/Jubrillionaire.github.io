const quiz = document.getElementById("quiz");
const suggestionBox = document.getElementById("suggestion");
const answerBox = document.getElementById("answer");
const startBtn = document.getElementById("start");

const gameData = [
  {
    question: "What is so fragile that saying its name breaks it?",
    answer: "silence",
  },

  {
    question: "What can fill a room but takes up no space?",
    answer: "light",
  },

  {
    question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
    answer: "river",
  },
  {
    question: "I am a word of letters three; add two and fewer there will be. What word am I?",
    answer: "few",
  },

 
];

const initialVal = Math.floor(Math.random() * 5);

let current = initialVal;
let started = false;

function restartGame () {
  window.location.reload()
}

function next() {
  if (current == gameData.length - 1) {
    current = 0;
  } else {
    current++;
  }
  return gameData[current];
}

function makeRandomTexts(length) {
  var result = "";
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function shuffelWord(word) {
  var shuffledWord = "";
  word = word.split("");
  while (word.length > 0) {
    shuffledWord += word.splice((word.length * Math.random()) << 0, 1);
  }
  return shuffledWord;
}

let playerAns = [];
let globalAnswer 

function startGame() {
  const single = next();
  const answer = single.answer;
  globalAnswer = single.answer
  const randomTexts = makeRandomTexts(5);
  const addedTexts = randomTexts + answer;
  const shuffledWord = shuffelWord(addedTexts);
  console.log(shuffledWord);

  quiz.innerHTML = `<h2>${single.question}</h2>`;
  for (var i = 0; i < shuffledWord.length; i++) {
    suggestionBox.innerHTML += `
  <p class='suggestionLetter' onclick='getVal(event)'>${shuffledWord.charAt(i)}</p>
`;
  }

  for (var i = 0; i < answer.length; i++) {
    answerBox.innerHTML += `
  <p class='ansLetter' ></p>
`;
  }

  started = true;
  if (started) {
    startBtn.style.display = "none";
  } else {
    startBtn.style.display = "block";
  }
}

init = -1

function getVal(e) {
  const val = e.target.innerText;
  playerAns += val;
  init ++
  console.log(answerBox.children[init], "ans box");
  answerBox.children[init].innerText = val
  if(playerAns.match(globalAnswer)){
    alert("correct!")
  }
}
