/* Star Trek vs Star Wars */
var starTrekTotalVotes = 0;
var starWarsTotalVotes = 0;


/* Star Trek Array, Constructor and Objects */
var starTrekArray = [];
function starTrek(character, path) {
	this.character = character;
	this.path = path;
	this.votes = 0;
	starTrekArray.push(this);
};

var kirk = new starTrek('Captain Kirk', 'img/star-trek/kirk.jpg');
var picard = new starTrek('Captain Picard', 'img/star-trek/picard.jpg');
var spock = new starTrek('Spock', 'img/star-trek/spock.jpg');

/* Star Wars Array, Constructor and Objects */
var starWarsArray = [];
function starWars(character, path) {
	this.character = character;
	this.path = path;
	this.votes = 0;
	starWarsArray.push(this);
};

var luke = new starWars('Luke Skywalker', 'img/star-wars/luke-skywalker.jpg');
var yoda = new starWars('Yoda', 'img/star-wars/yoda.jpg');
var solo = new starWars('Han Solo', 'img/star-wars/han-solo.jpg');

/* Debugging Message */
console.dir(starTrekArray);
console.dir(starWarsArray);

var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var rand1, rand2;

var tracker = {
};

tracker.starTrekRandPic = function() {
return Math.floor(Math.random() * starTrekArray.length);
}

tracker.starWarsRandPic = function() {
return Math.floor(Math.random() * starWarsArray.length);
}

tracker.displayImages = function(e) {
	e.preventDefault();

	/* Call randPic functions to grab two random photo numbers */
	rand1 = tracker.starTrekRandPic();
	rand2 = tracker.starWarsRandPic();

	/* Do while loop that if rand2 = rand1... then redo rand2 */
	do {
		rand2 = tracker.starWarsRandPic();
	} while (rand1 === rand2);

	/*	grab two img placeholder elements by html attrib id's
		assign src (from array position) to the img tags using img.src */
	choice1.innerHTML = '<img src ="' + starTrekArray[rand1].path + '">';
	choice2.innerHTML = '<img src ="' + starWarsArray[rand2].path + '">';
};

/* code to load pics on initial page load */
window.onload = function(e) {
	tracker.displayImages(e);
};

choice1.addEventListener('click', function() {
	starTrekArray[rand1].votes += 1;
	starTrekTotalVotes += 1;
	console.log('User voted for: ' + starTrekArray[rand1].character);
	console.log(starTrekArray[rand1].character + ' total votes = ' + starTrekArray[rand1].votes)
	console.log('starTrekTotalVotes: ' + starTrekTotalVotes)
	tracker.displayImages(event);
	makechart();
});

choice2.addEventListener('click', function() {
	starWarsArray[rand2].votes += 1;
	starWarsTotalVotes += 1;
	console.log('User voted for: ' + starWarsArray[rand2].character);
	console.log(starWarsArray[rand2].character + ' total votes = ' + starWarsArray[rand2].votes)
	console.log('starWarsTotalVotes: ' + starWarsTotalVotes)
	tracker.displayImages(event);
	makechart();
});

function makechart()	{
	var data = [
	  {
	    value: starTrekTotalVotes,
	    label: 'Star Trek',
	    color: '#811BD6',
	    highlight: '#811B33',
	    labelcolor: 'white',
	    labelfontsize: '16'
	  },
	  {
	    value: starWarsTotalVotes,
	    label: 'Star Wars',
	    color: '#9CBABA',
	    highlight: '#9CBA99',
	    labelcolor: 'white',
	    labelfontsize: '16'
	  }
	];

	var context = document.getElementById('results').getContext('2d');
	var skillsChart = new Chart(context).Doughnut(data, {
	    //Number - Amount of animation steps
	    animationSteps : 30,
	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",
	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,
	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : true
	});
}
makechart();