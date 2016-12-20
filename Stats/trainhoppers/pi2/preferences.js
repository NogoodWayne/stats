//Update these...
//Page title
var title = 'TrainHoppers - PI2 S1 Progress'

//Gauges: Set name of graph and the value to be displayed
//note these do not have to be the same as the default values
var gaugeOne = {
	name: 'Points accepted (17/33)',
	value: 52
};
var gaugeTwo = {
	name: 'Stories accepted (5/12)',
	value:42
};
var gaugeThree = {
	name: 'Enablers accepted (0/0)',
	value: 0
};
var gaugeFour = {
	name: 'Automated test coverage',
	value: 10
};
var gaugeFive = {
	name: 'Production support',
	value: 55
};
var gaugeSix = {
	name: 'Team Health',
	value: 75
};


//change these sometimes when needed
//Units of the graph to be displayed - %, CM, M, or # 
//this is text
gaugeOne.units = '%';
gaugeTwo.units = '%';
gaugeThree.units = '%';
gaugeFour.units = '%';
gaugeFive.units = '%';
gaugeSix.units = '%';

//Graph max value this will = 100 for % graphs
gaugeOne.max = '100';
gaugeTwo.max = '100';
gaugeThree.max = '100';
gaugeFour.max = '100';
gaugeFive.max = '100';
gaugeSix.max = '100';

//Min value of graph - probably always zero (0)
gaugeOne.min = '0';
gaugeTwo.min = '0';
gaugeThree.min = '0';
gaugeFour.min = '0';
gaugeFive.min = '0';
gaugeSix.min = '0';

/*
Where the green zone (ideal zone) should start
this is a % value of the 'max' value above so 80 = 80% of max
the green zone goes from this value to the max value
If you don't want a green zone set value to null - if you do set it to null then the redZone
should also be set to null as redZone is currently only needed in conjunction with the green zone
*/
gaugeOne.greenZone = 80;
gaugeTwo.greenZone = 80;
gaugeThree.greenZone = null;
gaugeFour.greenZone = 85;
gaugeFive.greenZone = null;
gaugeSix.greenZone = 80;

/*
Placement of the red and yellow zones is set by setting the red zone.  This value is also a percentage value.
The value here is the higest value for the redZone (the lowest point in the red zone is set to zero).  So setting this to 50 
means the red zone goes from 0 to 50% of the max value and the yellow zone goes from 50% of the max value to the bottom of the green zone.  
If you don't want to show the red / yellow zone set this value to null.
This should be set to null if the green zone is null (ok this is a bug).
*/
gaugeOne.redZone = null;
gaugeTwo.redZone = null;
gaugeThree.redZone = null;
gaugeFour.redZone = 50;
gaugeFive.redZone = null;
gaugeSix.redZone = 60;

//Leave this stuff below here 
//Graphsize - leave
//if you change these you may need to update the HTML or 
//the stylesheet to make sure everything fits
var width = 600;
var height = 250;

//div ids please leave - 
//these are used to place the graph on the page
gaugeOne.id = 'gauge1';
gaugeTwo.id = 'gauge2';
gaugeThree.id = 'gauge3';
gaugeFour.id = 'gauge4';
gaugeFive.id = 'gauge5';
gaugeSix.id = 'gauge6';

