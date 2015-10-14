/* Empty imgArray to be populated from this.addImg method in constructor */
var imgArray = [];

/* Picture Constructor */
function Picture(player, path) {
	this.player = player;
	this.path = path;
	this.votes = 0;

	/* this function adds the path for each image to the imgArray when a new picture object is created using the constructor */
	imgArray.push(this);
};

/* Create Picture Objects */
var kobe = new Picture('Kobe Bryant', 'img/kobe-bryant.jpg');
var lebron = new Picture('LeBron James', 'img/lebron-james.jpg');
var dwyane = new Picture('Dwyane Wade', 'img/dwyane-wade.jpg');
var michael = new Picture('Michael Jordan', 'img/michael-jordan.jpg');
var kevin = new Picture('Kevin Durant', 'img/kevin-durant.jpg');
var vince = new Picture('Vince Carter', 'img/vince-carter.jpg');
var tracy = new Picture('Tracy McGrady', 'img/tracy-mcgrady.jpg');
var steph = new Picture('Steph Curry', 'img/steph-curry.jpg');
var james = new Picture('James Harden', 'img/james-harden.jpg');
var chris = new Picture('Chris Paul', 'img/chris-paul.jpg');
var larry = new Picture('Larry Bird', 'img/larry-bird.jpg');
var magic = new Picture('Magic Johnson', 'img/magic-johnson.jpg');
var tim = new Picture('Tim Duncan', 'img/tim-duncan.jpg');
var shaq = new Picture('Shaquille O\'Neal', 'img/shaquille-oneal.jpg');
var charles = new Picture('Charles Barkley', 'img/charles-barkley.jpg');
var russell = new Picture('Russell Westbrook', 'img/russell-westbrook.jpg');
var brandon = new Picture('Brandon Roy', 'img/brandon-roy.jpg');
var allen = new Picture('Allen Iverson', 'img/allen-iverson.jpg');
var carmelo = new Picture('Carmelo Anthony', 'img/carmelo-anthony.jpg');
var blake = new Picture('Blake Griffin', 'img/blake-griffin.jpg');
var anthony = new Picture('Anthony Davis', 'img/anthony-davis.jpg');

var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');


/* Debugging Message */
// console.dir(imgArray);

var tracker = {
	/* Function to generate random number to pull from imgArray */
};

tracker.randPic = function() {
return Math.floor(Math.random() * imgArray.length);
}

tracker.addTally = function(choice) {
	// if (choice = 1) {
	// 	picture.votes = votes + 1;
	// } else 
};

tracker.displayImages = function(e) {
	e.preventDefault();

	/* Call randPic functions to grab two random photo numbers */
	var rand1 = imgArray[tracker.randPic()];
	var rand2 = imgArray[tracker.randPic()];

	/* Do while loop that if rand2 = rand1... then redo rand2 */
	do {
		rand2 = imgArray[tracker.randPic()];
	} while (rand1 === rand2);

	/* Debugging Message */
	console.log(rand1);
	console.log(rand2);

	/*	grab two img placeholder elements by html attrib id's
		assign src (from array position) to the img tags using img.src */
	choice1.innerHTML = '<img src ="' + rand1.path + '">';
	choice2.innerHTML = '<img src ="' + rand2.path + '">';
};

/* code to load pics on initial page load */
window.onload = function(e) {
	tracker.displayImages(e);
};

choice1.addEventListener('click', function() {
	// addTally() but add it to appropriate pic object
	tracker.addTally(1)
	tracker.displayImages(event);
	console.log('you chose1');
});

choice2.addEventListener('click', function() {
	// addTally() but add it to appropriate pic object
	tracker.addTally(2)
	tracker.displayImages(event);
	console.log('you chose2');
});