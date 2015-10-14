var data = [
	{
		value: 25, // images[randindex1].votes
		label: 'Alex',
		color: '#811bd6',
		heighlight: '#8aab33'
	},
	// {
	// 	value: 10,
	// 	label: 'Scott',
	// 	color: '#9cbaba',
	// 	heighlight: '#9cba99'
	// },
	{
		value: 65,
		label: 'Pat',
		color: 'orange',
		heighlight: 'yellow'
	}
];

var context = document.getElementById('skills').getContext('2d');
var skillsChart = new Chart(context).Doughnut(data, {
	//Number - Amount of animation steps
	animationSteps : 30,
	//String - animation easing effect
	animationEasing : "easeOutBounce",
	//boolean - whether we animate the rotation of the doughnut
	animateRotate : true,
	//boolean - whether we animate scaling the doughnut from the centre
	animateScale : true
})