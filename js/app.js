// Star Trek vs Star Wars franchise voting variables 
var starTrekTotalVotes;
var starWarsTotalVotes;

// Star Trek Array, Constructor and Objects 
var starTrekArray = [];
function starTrek(character, path, occupation, about) {
	this.character = character;
	this.path = path;
	this.occupation = occupation;
	this.about = about;
	this.votes = 0;
	starTrekArray.push(this);
}

var kirk = new starTrek('Captain Kirk', 'img/star-trek/kirk.jpg', 'Captain', 'Take charge swashbuckling risk taker that knows how to have a good time. Only person to ever beat the Kobayahi Maru.');
var picard = new starTrek('Captain Picard', 'img/star-trek/picard.jpg', 'Captain', 'I enjoy fencing, Shakespeare, detective stories and drinking tea. Let me know if you\'d like to "engage" and we can "make it so".');
var spock = new starTrek('Spock', 'img/star-trek/spock.jpg', 'First/Science Officer', 'Loyal and logical. Can tend to be a a little closed off emotionally at times.');
var bashir = new starTrek('Dr. Bashir', 'img/star-trek/bashir.jpg', 'Doctor', 'I would describe myself as deep, intelligent and passionate. Did I mention I\'m a doctor?');
var borg = new starTrek('The Borg', 'img/star-trek/borg.jpg', 'Borg hive member', 'You will be my mate and subsequently assimilated. Resistance is futile.');
var chakotay = new starTrek('Chakotay', 'img/star-trek/chakotay.jpg', 'First Officer', 'Looking to get serious and find something deep and meaningful. I\'m a vegetarian, an avid reader, and don\'t really drink much.');
var crusher = new starTrek('Beverly Crusher', 'img/star-trek/crusher.jpg', 'Doctor', 'My hobbies include theater, dancing and the occassional poker game. Do you have the winning hand?');
var data = new starTrek('Data', 'img/star-trek/data.jpg', 'Officer', 'Extremely high processing power with the strength to bend steel. I have a cat named Spot that I would love very much if I had the ability to feel emotions.');
var dax = new starTrek('Jadzia Dax', 'img/star-trek/dax.jpg', 'Science Officer', 'Eighth host of the Dax symbiont. I have the spirit of an old man. Literally. Outgoing and open minded. my hobbies include music, tongo, gymnastics and Klingon blood oaths.');
var geordi = new starTrek('Geordi LaForge', 'img/star-trek/geordi.jpg', 'Engineer', 'I\'m not a chemist and I might be blind... but I\'d like to see if we have some chemistry.');
var guinan = new starTrek('Guinan', 'img/star-trek/guinan.jpg', 'Bartender', 'Been there and back and seen it all. I\'m just a bartender, but I might be the smartest person on this ship.');
var harry = new starTrek('Harry Kim', 'img/star-trek/harry.jpg', 'Science Officer', 'I want our love to be like pi, irrational and never ending.');
var janeway = new starTrek('Captain Janeway', 'img/star-trek/janeway.jpg', 'Captain', 'Coffee fanatic. First federation captain to successfully traverse the Delta Quadrant.');
var mccoy = new starTrek('Dr. McCoy', 'img/star-trek/mccoy.jpg', 'Doctor', 'I\'m a doctor. Not an engineer. Or a mechanic. Or an elevator. I can get a little ornery sometimes. My nickname is Bones. Want to find out why?');
var obrien = new starTrek('Miles O\'Brien', 'img/star-trek/obrien.jpg', 'Officer', 'You know that guy that isn\'t the superstar but he\'s just super solid at his job and often overlooked? That\'s me. I\'ll be in transporter room 3 if you want to hang.');
var odo = new starTrek('Odo', 'img/star-trek/odo.jpg', 'Security Chief', 'Stickler for the rules. Deep sense of justice. A little hesitant about coupling, but willing to give it a try for the right solid humanoid.');
var quark = new starTrek('Quark','img/star-trek/quark.jpg', 'Bar Owner', 'I love money and women.');
var riker = new starTrek('William Riker', 'img/star-trek/riker.jpg', 'First Officer', 'Yes. The beard is real and it is SPECTACULAR. Looking for the right girl to become my number one.');
var scotty = new starTrek('Scotty', 'img/star-trek/scotty.jpg', 'Engineer', 'Large with lots of loving to go around. You can count on me to give you all I\'ve got.');
var seven = new starTrek('Seven of Nine', 'img/star-trek/seven.jpg', 'Voyager Crew Member', 'Interested in exploring the benefits of human sexuality. Perhaps we can copulate if we are sufficiently compatible.');
var sisko = new starTrek('Captain Sisko', 'img/star-trek/sisko.jpg', 'Captain', 'Strong, intelligent, family oriented, enjoys cooking, plays the piano. AKA the total package.');
var sulu = new starTrek('Hikaru Sulu', 'img/star-trek/sulu.jpg', 'Science Officer', 'Oh my. Your phasers I enjoy swordsplay. Up for some sparring?');
var tasha = new starTrek('Tasha Yar', 'img/star-trek/tasha.jpg', 'Security Officer', 'Hoping to find someone special to spend time with before the 23rd episode airs.');
var troi = new starTrek('Deanna Troi', 'img/star-trek/troi.jpg', 'Counselor', 'Looking for someone that is kind, caring and honest. Trust me. I\'ll know if you\'re lying.');
var tuvok = new starTrek('Tuvok', 'img/star-trek/tuvok.jpg', 'Security/Tactical Officer', 'I am a safe and logical choice if you are looking for something serious.');
var uhura = new starTrek('Uhura', 'img/star-trek/uhura.jpg', 'Communications Officer', 'Master of linguistics. PM if you know how to use your mouth ;)');
var wesley = new starTrek('Wesley Crusher', 'img/star-trek/wesley.jpg', 'Acting Ensign', 'Aspiring Starfleet officer with boyish good looks and great problem solving skills. A lot of people don\'t like me, but I\'m not quite sure why :(');
var worf = new starTrek('Worf', 'img/star-trek/worf.jpg', 'Security Officer', 'A little rough around the edges... and in the bedroom.');

// Star Wars Array, Constructor and Objects 
var starWarsArray = [];
function starWars(character, path, occupation, about) {
	this.character = character;
	this.path = path;
	this.occupation = occupation;
	this.about = about;
	this.votes = 0;
	starWarsArray.push(this);
}

var luke = new starWars('Luke Skywalker', 'img/star-wars/luke-skywalker.jpg', 'Jedi Knight', 'The one who brings balance to the force. I kissed my sister and my dad cut off my hand.');
var yoda = new starWars('Yoda', 'img/star-wars/yoda.jpg', 'Jedi Master', 'One of the most powerful Jedi in the history of Jedi. Swamps and cramped living spaces the ideal date must have.');
var solo = new starWars('Han Solo', 'img/star-wars/han-solo.jpg', 'Smuggler/General', 'Dashing hero looking for a copilot. Tonight this Han doesn\'t want to fly solo');
var ackbar = new starWars('Admiral Ackbar', 'img/star-wars/ackbar.jpg', 'Admiral', 'IT\'S A TRAP!!');
var anakin = new starWars('Anakin Skywalker', 'img/star-wars/anakin.jpg', 'Jedi Knight', 'Hopeless romantic with a short temper. I will do ANYTHING for love even if it means joining the dark side.');
var bail = new starWars('Bail Organa', 'img/star-wars/bail.jpg', 'Senator', 'Stylish and handsome. Strong belief in justice. Dislikes evil empires.');
var boba = new starWars('Boba Fett', 'img/star-wars/bobba.jpg', 'Bounty Hunter', 'The only thing I want more than a date with you is Han Solo.');
var c3po = new starWars('C3PO', 'img/star-wars/c3po.jpg', 'Protocol Droid', 'I am fluent in over six million forms of communication. Wanna sext?');
var chewie = new starWars('Chewbacca', 'img/star-wars/chewie.jpg', 'Bodyguard', 'Likes to unwind after a long day\'s work with a glass of red wine and a good book.');
var dooku = new starWars('Count Dooku', 'img/star-wars/dooku.jpg', 'Sith Lord', 'I\'m kind of like the most interesting man in the world except a lot more even and a lot less interesting.');
var ewok = new starWars('Ewok', 'img/star-wars/ewok.jpg', 'Hunter/Gatherer', 'Cute, small and hairy all over. Msg me if you want to.');
// var femaleJedi = new starWars('Female Blue Jedi', 'img/star-wars/female-jedi.jpg', 'Jedi Knight', '');
var jarjar = new starWars('Jar Jar Binks', 'img/star-wars/jarjar.jpg', 'Senator', 'You\'ve heard the rumors. They are all true. I am THE WORST character in the entire franchise.');
var lando = new starWars('Lando Calrissian', 'img/star-wars/lando.jpg', 'Smuggler/General', 'Questionable morals at times. Looking to take Ms. Right Now on a trip to Cloud City.');
var leia = new starWars('Princess Leia', 'img/star-wars/leia.jpg', 'Princess', 'I\'m a take charge kind of gal. Attracted to scruffy looking nerf herder types.');
var mace = new starWars('Mace Windu', 'img/star-wars/mace.jpg', 'Jedi Master', 'BAD MOTHER F*#@*');
var maul = new starWars('Darth Maul', 'img/star-wars/maul.jpg', 'Sith Lord', 'Don\'t be fooled by my pleasant demeanor. I\'m actually way scarier and more evil than I look');
var obiwan = new starWars('Obi-Wan Kenobi', 'img/star-wars/obiwan.jpg', 'Jedi Master', 'You are very pleased by my face. You want to message me. FYI this is definitely not a Jedi mind trick.');
var oola = new starWars('Oola', 'img/star-wars/oola.jpg', 'Dancer', 'Go dance for Jabba the Hutt they said. It will be fun they said.');
// var owen = new starWars('Uncle Owen', 'img/star-wars/owen.jpg', 'Farmer', '');
var padme = new starWars('Padme Amidala', 'img/star-wars/padme.jpg', 'Queen/Senator', 'Sweet, intelligent and slightly naive at times.');
var palpatine = new starWars('Senator Palpatine', 'img/star-wars/palpatine.jpg', 'Senator/Sith Lord/Evil Emperor', 'Ambitious to a fault.');
var quigon = new starWars('Qui-Gon Jinn', 'img/star-wars/quigon.jpg', 'Jedi Master', 'I have a very particular set of skills. Let\'s meet IRL and you can see for yourself.');
var r2d2 = new starWars('R2D2', 'img/star-wars/r2d2.jpg', 'Astromech Droid', 'Beep beep boop beep boop beep.');
// var shmi = new starWars('Shmi Skywalker', 'img/star-wars/shmi.jpg', 'Slave', '');
var wedge = new starWars('Wedge Antilles', 'img/star-wars/wedge.jpg', 'Pilot', 'You\'ve seen the movies how many times and I bet you didn\'t know my name. Thanks. It\'s Wedge.');
// var zam = new starWars('Zam the Assassin', 'img/star-wars/zam.jpg', 'Assassin', '');

// html elements to populate with content
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var trekName = document.getElementById('trekName');
var warsName = document.getElementById('warsName');
var trekProfile = document.getElementById('trekProfile');
var warsProfile = document.getElementById('warsProfile');
var first = document.getElementById('first');
// random number variables
var rand1, rand2;

var tracker = {};

tracker.starTrekRandPic = function() {
return Math.floor(Math.random() * starTrekArray.length);
};

tracker.starWarsRandPic = function() {
return Math.floor(Math.random() * starWarsArray.length);
};

tracker.displayImages = function() {
	if (starTrekArray.length === 0) {
		console.log('no more star trek characters')
		return null;
	}
	else {
		// Call randPic functions to grab two random photo numbers 
		rand1 = tracker.starTrekRandPic();
		rand2 = tracker.starWarsRandPic();
		// assign text and imgages to the html elements
		choice1.innerHTML = '<img class="choices" alt ="' + starTrekArray[rand1].character + '" title="' + starTrekArray[rand1].character + '" src ="' + starTrekArray[rand1].path + '">';
		choice2.innerHTML = '<img class="choices" alt ="' + starWarsArray[rand2].character + '" title="' + starWarsArray[rand2].character + '" src ="' + starWarsArray[rand2].path + '">';
		trekName.innerHTML = starTrekArray[rand1].character;
		warsName.innerHTML = starWarsArray[rand2].character;		
		trekProfile.innerHTML = '<b>Occupation:</b> ' + starTrekArray[rand1].occupation + '<br /><b>About Me:</b> ' + starTrekArray[rand1].about
		warsProfile.innerHTML = '<b>Occupation:</b> ' + starWarsArray[rand2].occupation + '<br /><b>About Me:</b> ' + starWarsArray[rand2].about
	}
};

/* Attempted to display top three vote getters but wasn't able to finish this portion */
// tracker.trekVoteSort = function () {
// 	starTrekArray.sort(function(a, b){return b.votes-a.votes});
// 	console.log(starTrekArray[0].character + 'votes: ' + starTrekArray[0].votes);
// 	first.innerHTML = starTrekArray[0].character + ': ' + starTrekArray[0].votes + ' votes';
// };

tracker.voteTrackerTrek = function() {
	starTrekArray[rand1].votes += 1;
	starTrekTotalVotes += 1;
	tracker.displayImages();
	resultsChart.datasets[0].bars[0].value += 1;
	storeData();
	retrieveData();
	// storeTrekVotes();
	// retrieveTrekVotes();
	// tracker.trekVoteSort();
	makechart();
};

tracker.voteTrackerWars = function() {
	starWarsArray[rand2].votes += 1;
	starWarsTotalVotes += 1;
	tracker.displayImages();
	resultsChart.datasets[0].bars[1].value += 1;
	storeData();
	retrieveData();
	makechart();
};

// Event listeners for when pictures are clicked on
choice1.addEventListener('click', tracker.voteTrackerTrek);
choice2.addEventListener('click', tracker.voteTrackerWars);

/* More stuff from trying to sort and store the top three vote getters */
// tracker.trekVoteSort();

/* function to store local data */
// function storeTrekVotes() {
// 	for (var i = 0; i < starTrekArray.length; i++) {
// 		if (starTrekArray[i] !== 0) {
// 			localStorage.setItem('trekCharacter', JSON.stringify(starTrekArray));
// 		};
// 	}
// }

// function retrieveTrekVotes() {
// 	if (localStorage.getItem('trekCharacter')) {
// 		var retrievedStarTrekArrayTemp = localStorage.getItem('trekCharacter');
// 		var retrievedStarTrekArray = JSON.parse(retrievedStarTrekArray);
// 		starTrekArray = retrievedStarTrekArray;
// 	};
// }

// Local storage setting and retrieving
function storeData() {
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

// Creating a bar chart using chart.js and canvas element
var resultsChart;

function makechart() {
	var data = 
		{
			labels: ['Star Trek', 'Star Wars'],
			datasets: [
				{
				label: 'Total Votes',
				fillColor: '#ff3366',
				strokeColor: '#811b33',
			    highlightFill: "#FFAAAA",
			    highlightStroke: "#811b33",			
			    data: [starTrekTotalVotes, starWarsTotalVotes]
				}
			]
		}
	var barChart = document.getElementById('results').getContext('2d');
	resultsChart = new Chart(barChart).Bar(data, {
		barValueSpacing : 15,		
		scaleFontColor: "gray",
		scaleLineWidth: 1,
		scaleLineColor: "gray",
	})
}

// If statement to get bar chart to display and function correctly
if (localStorage.getItem('Star Trek votes') && localStorage.getItem('Star Wars votes')) {
	tracker.displayImages();
	retrieveData();
	makechart();
} else {
	starTrekTotalVotes = 0;
	starWarsTotalVotes = 0;
	storeData();
	makechart();
};
