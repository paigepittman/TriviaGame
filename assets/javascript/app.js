$(document).ready(function() { 

//Array of all possible questions

var questions = [ {
		//first index of each array is question, 2nd is an array of all possible choices, 3rd is correct answe
		question: "What is Hagrid's dog's name?",
		choices: ["Scabbers", "Fluffy", "Crookshanks", "Fang"],
		correct: "Fang",
		wrongGif: "<img src='https://media.giphy.com/media/NoBXm9gmqzx96/giphy.gif'>",
		rightGif: "<img src='https://media.giphy.com/media/NoBXm9gmqzx96/giphy.gif'>"
	},
	{
		quesiton: "What is the first Tri-Wizard Tournament Challenge?",
		choices: ["dragons", "mermaids", "a maze", "a broomstick race"],
		correct: "dragons",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
		question: "What is the Killing Curse?",
		choices: ["Cruciatus Curse", "Imperius Curse", "Avada Kedavra", "Sectumsempra"],
		correct: "Avada Kedavra",
		wrongGif: "img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
		question: "Which house commonroom does the Fat Lady guard?",
		choices: ["Slytherin", "Gryfindor", "Hufflepuff", "Ravenclaw"],
		correct: "Gryfindor",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
		question: "Which spell erases memory?",
		choices: ["Lumos Maxima", "Obliviate", "Petrificus Totalus", "Stupify"],
		correct: "Obliviate",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
	 	question: "Who gives Harry the Marauder's Map?",
		choices: ["Sirius", "Dumbledore", "Fred and George", "Lupin"],
		correct: "Fred and George",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
	 	question: "Who is the oldest Weasley child?",
		choices: ["Ron", "Charlie", "Percy", "Bill"],
		correct: "Bill",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{
		question: "Whose Gringot's vault do Harry, Ron and Hermoine break into?",
		choices: ["Snape's", "Grindlewald's", "Bellatrix's", "Lucious's"],
		correct: "Bellatrix's",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	},
	{ 
		question: "Who is impersonating Mad Eye Moody throughout Harry's fourth year?",
		choices: ["Barty Crouch Jr", "Draco Malfoy", "Peter Petigrew", "Igor Karkaroff"],
		correct: "Barty Crouch Jr",
		wrongGif: "<img src='http://gph.is/1UPUTvl'>",
		rightGif: "<img src='http://gph.is/1eQZqhI'>"
	}
]

var showQuestion;

var count = 0;

var correctAnswer = questions[count].correct;

var userChoice = "";

var Points = 0;


 

function displayQuestion() {

	$("#question").html(questions[count].question);

}

function displayChoices() {

	$("#a").html(questions[count].choices[0]);
	$("#b").html(questions[count].choices[1]);
	$("#c").html(questions[count].choices[2]);
	$("#d").html(questions[count].choices[3]);
	

	


}
function nextQuestion() {

	count++;

	setTimeout(displayQuestion, 15000);

	if (count === questions.length) {

		count = 0;
	}

	if ()

}

$(".choice").click(function() {


if ($(this).text() === correctAnswer) {

	Points++;

	$("#question").html("Correct!");

	$("#choices").html(questions[count].rightGif);

	nextQuestion();

	displayQuestion();

	displayChoices();
}

else {

	$("#question").html("Wrong!");

	$("#choices").html(questions[count].wrongGif);

	nextQuestion();

	displayQuestion();

	displayChoices();
}


// console.log($(this).text());

});








		

function startGame() {

	showQuestion = setInterval(nextQuestion, 15000);


}

displayQuestion();

displayChoices();













//closing brackets
});











