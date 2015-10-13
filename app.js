/* Empty imgArray to be populated from this.addImg method in constructor */
var imgArray = [];

/* Picture Constructor */
function picture(shortName, number, path) {
	this.shortName = shortName;
	this.number = number;
	this.path = path;

	this.addImg = function() {
		imgArray.push(this.path);
	}
	this.addImg();
};

/* Create Picture Objects */
var test01 = new picture('test01', 1, 'img/test-01.jpg');
var test02 = new picture('test02', 2, 'img/test-02.jpg');
var test03 = new picture('test03', 3, 'img/test-03.jpg');

console.log(imgArray);

var tracker = {
	randPic: function () {
		return Math.floor(Math.random() * imgArray.length);
	}
};

var voteClick = function(e) {
	e.preventDefault();

	var rand1 = tracker.randPic();
	var rand2 = tracker.randPic();

	/* while loop that if rand2 = rand1... then redo rand2 */

	console.log(rand1);
	console.log(rand2);

	/*	create two img elements
		assign src (from array position) to the img tags using img.src = 
		reassign img src to p ids */

	var img1 = document.getElementById('pic1');
	var img2 = document.getElementById('pic2');

	img1.src = imgArray[rand1];
	img2.src = imgArray[rand2];

};

window.onload = function(e) {
	voteClick(e);
};

var voteSubmit = document.getElementById('voteSubmit');
voteSubmit.addEventListener('click', voteClick);