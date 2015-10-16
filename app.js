/* Star Trek vs Star Wars */
var starTrekTotalVotes = 0;
var starWarsTotalVotes = 0;

/* Star Trek Array, Constructor and Objects */
var starTrekArray = [];
function starTrek(character, path, occupation, about) {
	this.character = character;
	this.path = path;
	this.occupation = occupation;
	this.about = about;
	this.votes = 0;
	starTrekArray.push(this);
}

var kirk = new starTrek('Captain Kirk', 'img/star-trek/kirk.jpg', 'Captain, Enterprise', 'I\'m a take charge swashbuckling risk taker that knows how to have a good time. Only person to ever beat the Kobayahi Maru #humbleBrag');
var picard = new starTrek('Captain Picard', 'img/star-trek/picard.jpg', 'Captain, Enterprise', 'I enjoy fencing, Shakespeare, detective stories and drinking tea. Let me know if you\'d like to "engage" and we can "make it so".');
var spock = new starTrek('Spock', 'img/star-trek/spock.jpg', 'First/Science Officer of the Enterprise', 'Loyal and logical. If you are a good match you will have a mate for life');
var bashir = new starTrek('Dr. Bashir', 'img/star-trek/bashir.jpg', 'Chief Medical Officer, Deep Space Nine', 'I would describe myself as deep, intelligent and passionate. Did I mention I\'m a doctor?');
var borg = new starTrek('The Borg', 'img/star-trek/borg.jpg', 'Borg collective hive member', 'You will be my mate and subsequently assimilated. Resistance is futile.');
var chakotay = new starTrek('Chakotay', 'img/star-trek/chakotay.jpg', 'First Officer, Voyager', 'Looking to get serious and find something deep and meaningful. I\'m a vegetarian, an avid reader, and don\'t really drink much.');
var crusher = new starTrek('Beverly Crusher', 'img/star-trek/crusher.jpg', 'Chief Medical Officer, Enterprise', 'My hobbies include theater, dancing and the occassional poker game. Do you have the winning hand?');
var data = new starTrek('Data', 'img/star-trek/data.jpg', 'Operations Officer, Enterprise', 'First and only android to ever serve in Starfleet. Extremely high processing power with the strength to bend steel. I have a cat named Spot that I would love very much if I had the ability to feel emotions.');
var dax = new starTrek('Jadzia Dax', 'img/star-trek/dax.jpg', 'Science Officer, Deep Space Nine', 'Eighth host of the Dax symbiont. I have the spirit of an old man. Literally. Outgoing and open minded. my hobbies include music, tongo, gymnastics and Klingon blood oaths.');
var geordi = new starTrek('Geordi LaForge', 'img/star-trek/geordi.jpg', 'Chief Engineer, Enterprise', 'I\'m not a chemist and I might be blind... but I\'d like to see if we have some chemistry.');
var guinan = new starTrek('Guinan', 'img/star-trek/guinan.jpg', 'Bartender, Enterprise', 'Been there and back and seen it all. I\'m just a bartender, but I might be the smartest person on this ship.');
var harry = new starTrek('Harry Kim', 'img/star-trek/harry.jpg', 'Operations Officer, Voyager', 'I want our love to be like pi, irrational and never ending.');
var janeway = new starTrek('Captain Janeway', 'img/star-trek/janeway.jpg', 'Captain, Voyager', 'Coffee fanatic. First federation captain to successfully traverse the Delta Quadrant.');
var mccoy = new starTrek('Dr. McCoy', 'img/star-trek/mccoy.jpg', 'Chief Medical Officer, Enterprise', 'I\'m a doctor. Not an engineer. Or a mechanic. Or an elevator. I can get a little ornery sometimes. My nickname is Bones. Want to find out why?');
var obrien = new starTrek('Miles O\'Brien', 'img/star-trek/obrien.jpg', 'Transporter Chief, Enterprise', 'Want to meet up and make the next generation?');
var odo = new starTrek('Odo', 'img/star-trek/odo.jpg', 'Chief Security Officer, Deep Space Nine', 'Stickler for the rules. Deep sense of justice. A little hesitant about coupling, but willing to give it a try for the right solid humanoid.');
var quark = new starTrek('Quark','img/star-trek/quark.jpg', 'Bar Owner', 'I love money and women!');
var riker = new starTrek('William Riker', 'img/star-trek/riker.jpg', 'First Officer, Enterprise', 'Ladies man with a spectacular beard. Come to my quarters and maybe I\'ll show you, I mean play you, my trombone.');
var scotty = new starTrek('Scotty', 'img/star-trek/scotty.jpg', 'Chief Engineer, Enterprise', 'Large with lots of loving to go around. You can count on me to give you all I\'ve got.');
var seven = new starTrek('Seven of Nine', 'img/star-trek/seven.jpg', 'Crew Member, Voyager', 'Interested in exploring the benefits of human sexuality. Perhaps we can copulate if we are sufficiently compatible.');
var sisko = new starTrek('Captain Sisko', 'img/star-trek/sisko.jpg', 'Captain, Deep Space Nine', 'Strong, intelligent, family oriented, enjoys cooking, plays the piano. AKA the total package.');
var sulu = new starTrek('Hikaru Sulu', 'img/star-trek/sulu.jpg', 'Science Officer, Enterprise', 'I enjoy swordsplay. Up for some sparring?');
var tasha = new starTrek('Tasha Yar', 'img/star-trek/tasha.jpg', 'Chief Security Officer, Enterprise', 'Hoping to find someone special to spend time with before the 23rd episode airs.');
var troi = new starTrek('Deanna Troi', 'img/star-trek/troi.jpg', 'Counselor, Enterprise', 'Looking for someone that is kind, caring and honest. Trust me. I\'ll know if you\'re lying.');
var tuvok = new starTrek('Tuvok', 'img/star-trek/tuvok.jpg', 'Chief Security/Tactical Officer, Voyager', 'I am a safe and logical choice if you are looking for something serious.');
var uhura = new starTrek('Uhura', 'img/star-trek/uhura.jpg', 'Communications Officer, Enterprise', 'Master of linguistics. PM if you know how to use your mouth ;)');
var wesley = new starTrek('Wesley Crusher', 'img/star-trek/wesley.jpg', 'Acting Ensign, Enterprise', 'Aspiring Starfleet officer with boyish good looks and great problem solving skills.');
var worf = new starTrek('Worf', 'img/star-trek/worf.jpg', 'Chief Security Officer, Enterprise', 'A little rough around the edges... and in the bedroom.');

/* Star Wars Array, Constructor and Objects */
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
var solo = new starWars('Han Solo', 'img/star-wars/han-solo.jpg', 'Smuggler/General for the Rebel Alliance', 'Dashing hero looking for a copilot. Tonight this Han doesn\'t want to fly solo');
var ackbar = new starWars('Admiral Ackbar', 'img/star-wars/ackbar.jpg', 'Admiral, Rebel Alliance', 'IT\'S A TRAP!!');
var anakin = new starWars('Anakin Skywalker', 'img/star-wars/anakin.jpg', 'Jedi Knight', 'I will do ANYTHING for love. Including becoming a dark Sith lord and killing you when you\'re pregnant.');
var bail = new starWars('Bail Organa', 'img/star-wars/bail.jpg', 'Senator, Alderaan Sector', 'Stylish and handsome. Strong belief in justice. Dislikes evil empires.');
var boba = new starWars('Boba Fett', 'img/star-wars/bobba.jpg', 'Bounty Hunter', 'The only thing I want more than a date with you is Han Solo.');
var c3po = new starWars('C3PO', 'img/star-wars/c3po.jpg', 'Protocol Droid', 'I am fluent in over six million forms of communication. Wanna sext?');
var chewie = new starWars('Chewie', 'img/star-wars/chewie.jpg', 'Bodyguard', 'Uuuuuuuuurrrr. Urrr. Arrrrrrrrr');
var dooku = new starWars('Count Dooku', 'img/star-wars/dooku.jpg', 'Sith Lord', '', '');
var ewok = new starWars('Ewok', 'img/star-wars/ewok.jpg', 'Hunter/Gatherer', 'Cute, small and hairy all over. Msg me if you want to cuddle.');
var femaleJedi = new starWars('Female Blue Jedi', 'img/star-wars/female-jedi.jpg', 'Jedi Knight', '');
var jarjar = new starWars('Jar Jar Binks', 'img/star-wars/jarjar.jpg', 'Senator, Galactic Senate', 'I\'m the worst. THE WORST.');
var lando = new starWars('Lando Calrissian', 'img/star-wars/lando.jpg', 'Smuggler/General for the Rebel Alliance', 'Questionable morals at times. Looking to take Ms. Right Now on a trip to Cloud City.');
var leia = new starWars('Princess Leia', 'img/star-wars/leia.jpg', 'Princess', '');
var mace = new starWars('Mace Windu', 'img/star-wars/mace.jpg', 'Jedi Master', '');
var maul = new starWars('Darth Maul', 'img/star-wars/maul.jpg', 'Sith Lord', '');
var obiwan = new starWars('Obi-Wan Kenobi', 'img/star-wars/obiwan.jpg', 'Jedi Master', '');
var oola = new starWars('Oola', 'img/star-wars/oola.jpg', 'Dancer', '');
var owen = new starWars('Uncle Owen', 'img/star-wars/owen.jpg', 'Farmer', '');
var padme = new starWars('Queen Amidala', 'img/star-wars/padme.jpg', 'Queen/Senator', '');
var palpatine = new starWars('Senator Palpatine', 'img/star-wars/palpatine.jpg', 'Senator/Sith Lord/Evil Emperor', '');
var quigon = new starWars('Qui-Gon Jinn', 'img/star-wars/quigon.jpg', 'Jedi Master', '');
var r2d2 = new starWars('R2D2', 'img/star-wars/r2d2.jpg', 'Astromech Droid', '');
var shmi = new starWars('Shmi Skywalker', 'img/star-wars/shmi.jpg', 'Slave', '');
var wedge = new starWars('Wedge Antilles', 'img/star-wars/wedge.jpg', 'Pilot, Rebel Alliance', '');
var zam = new starWars('Zam the Assassin', 'img/star-wars/zam.jpg', 'Assassin', '');

var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var trekName = document.getElementById('trekName');
var warsName = document.getElementById('warsName');
var trekProfile = document.getElementById('trekProfile');
var warsProfile = document.getElementById('warsProfile');
var rand1, rand2;

var tracker = {
};

tracker.starTrekRandPic = function() {
return Math.floor(Math.random() * starTrekArray.length);
};

tracker.starWarsRandPic = function() {
return Math.floor(Math.random() * starWarsArray.length);
};

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
		choice1.innerHTML = '<img class="choices" alt ="' + starTrekArray[rand1].character + '" title="' + starTrekArray[rand1].character + '" src ="' + starTrekArray[rand1].path + '">';
		choice2.innerHTML = '<img class="choices" alt ="' + starWarsArray[rand2].character + '" title="' + starWarsArray[rand2].character + '" src ="' + starWarsArray[rand2].path + '">';

		trekName.innerHTML = starTrekArray[rand1].character;
		warsName.innerHTML = starWarsArray[rand2].character;		

		trekProfile.innerHTML = '<b>Occupation:</b> ' + starTrekArray[rand1].occupation + '<br /><b>About Me:</b> ' + starTrekArray[rand1].about
		warsProfile.innerHTML = '<b>Occupation:</b> ' + starWarsArray[rand2].occupation + '<br /><b>About Me:</b> ' + starWarsArray[rand2].about
	}
};


/* code to load pics on initial page load */
window.onload = function(e) {
	tracker.displayImages(e);
};

/* function to store local data */
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
retrieveData();

choice1.addEventListener('click', function() {
	starTrekArray[rand1].votes += 1;
	starTrekTotalVotes += 1;
	tracker.displayImages(event);
	makechart();
	storeData();
});

choice2.addEventListener('click', function() {
	starWarsArray[rand2].votes += 1;
	starWarsTotalVotes += 1;
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
	var skillsChart = new Chart(context).Pie(data, {
	    //Number - Amount of animation steps
	    animationSteps : 10,
	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",
	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,
	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : true
	});
}
makechart();

// var largest = 0;

// findLargest = function() {
// 	for(i = 0; i < starTrekArray.length, i++) {
// 		if(starTrekArray[i].votes > largest) {
// 			console.log(largest + '' + starTrekArray[i].votes);
// 			largest = starTrekArray[i].votes
// 		}
// 	}
// };
// findLargest();
