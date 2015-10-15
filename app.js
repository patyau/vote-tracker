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
}

var kirk = new starTrek('Captain Kirk', 'img/star-trek/kirk.jpg');
var picard = new starTrek('Captain Picard', 'img/star-trek/picard.jpg');
var spock = new starTrek('Spock', 'img/star-trek/spock.jpg');
var bashir = new starTrek('Dr. Bashir', 'img/star-trek/bashir.jpg');
var borg = new starTrek('The Borg', 'img/star-trek/borg.jpg');
var chakotay = new starTrek('Chakotay', 'img/star-trek/chakotay.jpg');
var crusher = new starTrek('Beverly Crusher', 'img/star-trek/crusher.jpg');
var data = new starTrek('Data', 'img/star-trek/data.jpg');
var dax = new starTrek('Jadzia Dax', 'img/star-trek/dax.jpg');
var geordi = new starTrek('Geordi LaForge', 'img/star-trek/geordi.jpg');
var guinan = new starTrek('Guinan', 'img/star-trek/guinan.jpg');
var harry = new starTrek('Harry Kim', 'img/star-trek/harry.jpg');
var janeway = new starTrek('Captain Janeway', 'img/star-trek/janeway.jpg');
var mccoy = new starTrek('Dr. McCoy', 'img/star-trek/mccoy.jpg');
var obrien = new starTrek('Chief O\'Brien', 'img/star-trek/obrien.jpg');
var odo = new starTrek('Odo', 'img/star-trek/odo.jpg');
var quark = new starTrek('Quark','img/star-trek/quark.jpg');
var riker = new starTrek('William Riker', 'img/star-trek/riker.jpg');
var scotty = new starTrek('Scotty', 'img/star-trek/scotty.jpg');
var seven = new starTrek('Seven of Nine', 'img/star-trek/seven.jpg');
var sisko = new starTrek('Captain Sisko', 'img/star-trek/sisko.jpg');
var spock = new starTrek('Spock', 'img/star-trek/spock.jpg');
var sulu = new starTrek('Sulu', 'img/star-trek/sulu.jpg');
var tasha = new starTrek('Tasha Yar', 'img/star-trek/tasha.jpg');
var troi = new starTrek('Deanna Troi', 'img/star-trek/troi.jpg');
var tuvok = new starTrek('Tuvok', 'img/star-trek/tuvok.jpg');
var uhura = new starTrek('Uhura', 'img/star-trek/uhura.jpg');
var wesley = new starTrek('Wesley Crusher', 'img/star-trek/wesley.jpg');
var worf = new starTrek('Worf', 'img/star-trek/worf.jpg');

/* Star Wars Array, Constructor and Objects */
var starWarsArray = [];
function starWars(character, path) {
	this.character = character;
	this.path = path;
	this.votes = 0;
	starWarsArray.push(this);
}

var luke = new starWars('Luke Skywalker', 'img/star-wars/luke-skywalker.jpg');
var yoda = new starWars('Yoda', 'img/star-wars/yoda.jpg');
var solo = new starWars('Han Solo', 'img/star-wars/han-solo.jpg');
var ackbar = new starWars('Admiral Ackbar', 'img/star-wars/ackbar.jpg');
var anakin = new starWars('Anakin Skywalker', 'img/star-wars/anakin.jpg');
var bail = new starWars('Bail Organa', 'img/star-wars/bail.jpg');
var boba = new starWars('Boba Fett', 'img/star-wars/bobba.jpg');
var c3po = new starWars('C3PO', 'img/star-wars/c3po.jpg');
var chewie = new starWars('Chewie', 'img/star-wars/chewie.jpg');
var dooku = new starWars('Count Dooku', 'img/star-wars/dooku.jpg');
var ewok = new starWars('Ewok', 'img/star-wars/ewok.jpg');
var femaleJedi = new starWars('Female Blue Jedi', 'img/star-wars/female-jedi.jpg');
var jarjar = new starWars('Jar Jar Binks', 'img/star-wars/jarjar.jpg');
var lando = new starWars('Lando Calrissian', 'img/star-wars/lando.jpg');
var leia = new starWars('Princess Leia', 'img/star-wars/leia.jpg');
var mace = new starWars('Mace Windu', 'img/star-wars/mace.jpg');
var maul = new starWars('Darth Maul', 'img/star-wars/maul.jpg');
var obiwan = new starWars('Obi-Wan Kenobi', 'img/star-wars/obiwan.jpg');
var oola = new starWars('Oola', 'img/star-wars/oola.jpg');
var owen = new starWars('Uncle Owen', 'img/star-wars/owen.jpg');
var padme = new starWars('Queen Amidala', 'img/star-wars/padme.jpg');
var palpatine = new starWars('Senator Palpatine', 'img/star-wars/palpatine.jpg');
var quigon = new starWars('Qui-Gon Jinn', 'img/star-wars/quigon.jpg');
var r2d2 = new starWars('R2D2', 'img/star-wars/r2d2.jpg');
var shmi = new starWars('Shmi Skywalker', 'img/star-wars/shmi.jpg');
var wedge = new starWars('Wedge Antilles', 'img/star-wars/wedge.jpg');
var zam = new starWars('Zam the Assassin', 'img/star-wars/zam.jpg');


/* Debugging Message */
console.dir(starTrekArray);
console.dir(starWarsArray);

var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var trekName = document.getElementById('trekName');
var warsName = document.getElementById('warsName');
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
	if (starTrekArray.length === 0) {
		console.log('no more star trek characters')
		return null;
	}
	else {
		e.preventDefault();

		/* Call randPic functions to grab two random photo numbers */
		rand1 = tracker.starTrekRandPic();
		rand2 = tracker.starWarsRandPic();

		/*	grab two img placeholder elements by html attrib id's
			assign src (from array position) to the img tags using img.src */
		choice1.innerHTML = '<img alt ="' + starTrekArray[rand1].character + '" title="' + starTrekArray[rand1].character + '" src ="' + starTrekArray[rand1].path + '">';
		choice2.innerHTML = '<img alt ="' + starWarsArray[rand2].character + '" title="' + starWarsArray[rand2].character + '" src ="' + starWarsArray[rand2].path + '">';

		trekName.innerHTML = starTrekArray[rand1].character;
		warsName.innerHTML = starWarsArray[rand2].character;		

		// var discardedStarTrek = starTrekArray.splice(rand1,1);
		// var discardedStarWars = starWarsArray.splice(rand2,1);

		// for(var i = 0; i < discardedStarTrek.length; i++) {
		// 	console.log(discardedStarTrek[i].character);
		// }

		// for(var i = 0; i < discardedStarWars.length; i++) {
		// 	console.log(discardedStarWars[i].character);
		// }
	}
};

/* code to load pics on initial page load */
window.onload = function(e) {
	tracker.displayImages(e);
};

/* function to store local data */
function storeData() {
	// var starTrekData = JSON.stringify(starTrekTotalVotes);
	// var starWarsData = JSON.stringify(starWarsTotalVotes);
	// localStorage.setItem('Star Trek votes', starTrekData);
	// localStorage.setItem('Star Wars votes', starWarsData);

	localStorage.setItem('Star Trek votes', JSON.stringify(starTrekTotalVotes));
	localStorage.setItem('Star Wars votes', JSON.stringify(starWarsTotalVotes));
}

function retrieveData() {
	var retrievedStarTrekVotesTemp = localStorage.getItem('Star Trek votes');
	var retrievedStarWarsVotesTemp = localStorage.getItem('Star Wars votes');
	var retrievedStarTrekVotes = JSON.parse(retrievedStarTrekVotesTemp);
	var retrievedStarWarsVotes = JSON.parse(retrievedStarWarsVotesTemp);

	starTrekTotalVotes = retrievedStarTrekVotes;
	starWarsTotalVotes = retrievedStarWarsVotes;
}

retrieveData();

choice1.addEventListener('click', function() {
	starTrekArray[rand1].votes += 1;
	starTrekTotalVotes += 1;
	console.log('User voted for: ' + starTrekArray[rand1].character);
	console.log(starTrekArray[rand1].character + ' total votes = ' + starTrekArray[rand1].votes)
	console.log('starTrekTotalVotes: ' + starTrekTotalVotes)
	tracker.displayImages(event);
	makechart();
	storeData();
});

choice2.addEventListener('click', function() {
	starWarsArray[rand2].votes += 1;
	starWarsTotalVotes += 1;
	console.log('User voted for: ' + starWarsArray[rand2].character);
	console.log(starWarsArray[rand2].character + ' total votes = ' + starWarsArray[rand2].votes)
	console.log('starWarsTotalVotes: ' + starWarsTotalVotes)
	tracker.displayImages(event);
	makechart();
	storeData();
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
	    animationSteps : 40,
	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",
	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : false,
	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : true
	});
}
makechart();