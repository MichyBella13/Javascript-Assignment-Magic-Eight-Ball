//Variables
let userName  = 'Andy'
const userQuestion = 'Will I Be Rich?'
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ' '
//What To Do if userName is inputed
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
//Console Log of question asked
console.log(`${userName} aske: ${userQuestion}`)
//Statements
switch (randomNumber) {
case 0 :
		eightBall = 'It is certain'
		break;
case 1 :
		eightBall = 'It is decidedly so'
		break;
case 2 :
		eightBall = 'Reply hazy try again'
		break;
case 3 :
		eightBall = 'Cannot predict now'
		break;
case 4 :
		eightBall = 'Do not count on it'
		break;
case 5 :
		eightBall = 'My sources say no'
		break;
case 6 :
		eightBall = 'Outlook not so good'
		break;
case 7 :
		eightBall = 'Signs point to yes'
		break;
//Print Answer To console.log
console.log(`Magic EightBall: ${eightBall}`)

