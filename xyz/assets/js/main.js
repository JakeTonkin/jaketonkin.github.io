$(document).ready(function(){

var word1 = [
	"monkey",
	"chicken",
	"cat",
	"dog",
	"fish",
	"sheep",
	"t-rex"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "toothbrush",
  "phone",
  "hammer",
  "car",
  "computer",
  "shoe",
  "trampoline"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "fuzzy",
  "smelly",
  "wooly",
  "bouncy",
  "wet",
  "gooey",
  "sticky",

];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);

});