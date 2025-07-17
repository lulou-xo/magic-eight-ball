function startBtn(){
let userName = prompt('Enter your name');
if (typeof userName !== 'string' || userName.trim() === '') {
  userName = 'Anonymous';
}//Check if user entered their name
const name = document.getElementById("username");
  name.innerHTML = userName + ' asked:';
//userName === '' ? //console.log(`Hello, ${userName}!`);
let userQuestion = prompt('Write your question here'); //User input question here
if (typeof userQuestion !== 'string' || userQuestion.trim() === '') {
  userQuestion = 'Nothing';
}//Check if user asked a question
//console.log(`${userName} asked: "${userQuestion}"`);
  const quest = document.getElementById("question");
  quest.innerHTML = userQuestion;
  
}



function ballNumber() {
  
  let randomNumber = Math.floor(Math.random() *8);// Generate random number from 0-7
  const n = document.getElementById("ball");
  n.innerText = randomNumber;
  
  let eightBall = '';
switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
}
const ans = document.getElementById("answer");
  ans.innerText = eightBall;
}