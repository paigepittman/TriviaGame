$(document).ready(function() {

var currentQ; 

//Array of all possible questions

var questions = [
		//first index of each array is question, 2nd is an array of all possible choices, 3rd is correct answer
	question1 = [
		"What is Hagrid's dog's name?",
		["Scabbers", "Fluffy", "Crookshanks", "Fang"],
		"Fang"
	],
	
	question2 = [
		"What is the first Tri-Wizard Tournament Challenge?",
		["dragons", "mermaids", "a maze", "a broomstick race"],
		"dragons"
	],

	question3 = [
		"What is the Killing Curse?",
		["Cruciatus Curse", "Imperius Curse", "Avada Kedavra", "Sectumsempra"],
		"Avada Kedavra"
	],

	question4 = [
		"Which house commonroom does the Fat Lady guard?",
		["Slytherin", "Gryfindor", "Hufflepuff", "Ravenclaw"],
		"Gryfindor"
	],

	question5 = [
		"Which spell erases memory?",
		["Lumos Maxima", "Obliviate", "Petrificus Totalus", "Stupify"],
		"Obliviate"
	],
	
	question6 = [
		"Who gives Harry the Marauder's Map?"
		["Sirius", "Dumbledore", "Fred and George", "Lupin"],
		"Fred and George"
	],

	question7 = [
		"Who is the oldest Weasley child?"
		["Ron", "Charlie", "Percy", "Bill"],
		"Bill"
	],

	question8 = [
		"Whose Gringot's vault do Harry, Ron and Hermoine break into?"
		["Snape's", "Grindlewald's", "Bellatrix's", "Lucious's"],
		"Bellatrix's"
	],

	question9 = [
		"Who is impersonating Mad Eye Moody throughout Harry's fourth year?"
		["Barty Crouch Jr", "Draco Malfoy", "Peter Petigrew", "Igor Karkaroff"],
		"Bary Crouch Jr"
	]
]

var correctSelections = [];


 
for (var i = 0; i < questions.length; i++) {

function displayQuestion() {

	$("#question").html([q[0]]);

}

}

console.log(questions[i[0]]);

});





