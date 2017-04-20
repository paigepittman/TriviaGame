$(document).ready(function() { 

//Array of all possible questions

var questions = [ {
		//first index of each array is question, 2nd is an array of all possible choices, 3rd is correct answe
		question: "What is Hagrid's dog's name?",
		choices: ["Scabbers", "Fluffy", "Crookshanks", "Fang"],
		correct: "Fang"
		
	},
	{
		question: "What is the first Tri-Wizard Tournament Challenge?",
		choices: ["dragons", "mermaids", "a maze", "a broomstick race"],
		correct: "dragons"

	},
	{
		question: "What is the Killing Curse?",
		choices: ["Cruciatus Curse", "Imperius Curse", "Avada Kedavra", "Sectumsempra"],
		correct: "Avada Kedavra"
	},
	{
		question: "Which house commonroom does the Fat Lady guard?",
		choices: ["Slytherin", "Gryfindor", "Hufflepuff", "Ravenclaw"],
		correct: "Gryfindor"
	},
	{
		question: "Which spell erases memory?",
		choices: ["Lumos Maxima", "Obliviate", "Petrificus Totalus", "Stupify"],
		correct: "Obliviate"
	},
	{
	 	question: "Who gives Harry the Marauder's Map?",
		choices: ["Sirius", "Dumbledore", "Fred and George", "Lupin"],
		correct: "Fred and George"
		
	},
	{
	 	question: "Who is the oldest Weasley child?",
		choices: ["Ron", "Charlie", "Percy", "Bill"],
		correct: "Bill"
	},
	{
		question: "Whose Gringot's vault do Harry, Ron and Hermoine break into?",
		choices: ["Snape's", "Grindlewald's", "Bellatrix's", "Lucious's"],
		correct: "Bellatrix's"
	},
	{ 
		question: "Who is impersonating Mad Eye Moody throughout Harry's fourth year?",
		choices: ["Barty Crouch Jr", "Draco Malfoy", "Peter Petigrew", "Igor Karkaroff"],
		correct: "Barty Crouch Jr"
	}
	{
		question: "What did Dumbledore leave Ron in his will?",
		choices: ["The Tales of Beedle and the Bard", "A lighter", "The Invisibility Cloak", "a Snitch"],
		correct: "A lighter"
	}
]

var showQuestion;

var hideQuestion;

var count = 0;

var userChoice = "";

var Points = 0;

var timer = 20;

var setIntervalId;

window.onload = function() {

	$("#question").html("How well do you know Harry Potter?");
	$("#a").html("play and find out!");
	$("#b").html("<button>Start</button>");
}
 

function displayQuestion() {

	if (count < questions.length || 0) {
	hideQuestion = setInterval(timeUp, 10000);
	clearInterval(showQuestion);
	$("#question").html(questions[count].question);
	$("#a").html(questions[count].choices[0]);
	$("#b").html(questions[count].choices[1]);
	$("#c").html(questions[count].choices[2]);
	$("#d").html(questions[count].choices[3]);
	
	console.log(questions[count].question);

	}

	else {
		clearInterval(showQuestion);
		clearInterval(hideQuestion);
		$("#question").html("You're a wizard, Harry!");
		$("#choices").html(Points + "/10<br>" + "<img src='https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif'>");

	}

}

function timeUp() {
	count++;
	clearInterval(hideQuestion);
	showQuestion = setInterval(displayQuestion, 3000);
	$("#question").html("Time's up!")
	$("#a").html("<img src='https://media.giphy.com/media/720g7C1jz13wI/giphy.gif'>");
	$("#b").html("");
	$("#c").html("");
	$("#d").html("");
	
}


$(".choice").click(function() {

var correctAnswer = questions[count].correct;



if ($(this).text() === "Start") {

	clearInterval(hideQuestion);
	showQuestion = setInterval(displayQuestion, 1000);

}



else if ($(this).text() === correctAnswer) {

	Points++;

	count++;

	clearInterval(hideQuestion);
	showQuestion = setInterval(displayQuestion, 3000);

	$("#question").html("Correct!");

	$("#a").html("<img src='https://media.giphy.com/media/PYoiPtqNfvc88/giphy.gif'>");
	$("#b").html("");
	$("#c").html("");
	$("#d").html("");

	console.log("correct");

}


else {
	count++;
	clearInterval(hideQuestion);

	showQuestion = setInterval(displayQuestion, 3000);

	$("#question").html("Wrong!");

	$("#a").html("<img src='https://media.giphy.com/media/AisOYaOZdrS1i/giphy.gif'>");
	$("#b").html("");
	$("#c").html("");
	$("#d").html("");

	

}


});



});











