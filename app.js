/* Empty imgArray to be populated from this.addImg method in constructor */
var imgArray = [];

/* Picture Constructor */
function picture(shortName, number, path) {
	this.shortName = shortName;
	this.number = number;
	this.path = path;
	this.votes = 0;

	/* this function adds the path for each image to the imgArray when a new picture object is created using the constructor */
	imgArray.push(this);
};

/* Create Picture Objects */
var test01 = new picture('test01', 1, 'img/test-01.jpg');
var test02 = new picture('test02', 2, 'img/test-02.jpg');
var test03 = new picture('test03', 3, 'img/test-03.jpg');

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