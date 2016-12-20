//Change once daily
var completedStories = 1;
var completedPoints = 1;
var dayOne = [1, 10];
var dayTwo = [1, 10];
var dayThree = [null, null];
var dayFour = [null, null];
var dayFive = [null, null];
var daySix = [null, null];
var daySeven = [null, null];
var dayEight = [null, null];
var dayNine = [null, null];
var dayTen = [null, null];

//update as things change 
//TEAM STATS
var teamCycletime = 4;
var teamCycletimeText = "PI average " + 5.4 ;
var teamThroughputText = "PI average " + 11;
var teamProductionIssues = 2;
var teamStretchTargets = 0;

//TEAM NAME
var teamName = "TrainHoppers";
//Update at start of sprint
var staticSprintNum = 2;
var wipLimit = 6;
var originalScope = 29;

//Leave alone
var teamPercentageCompleteText = completedPoints + " out of " + originalScope;
var teamThroughput = completedStories;
var teamPercentageComplete = Math.round((completedPoints /originalScope)*100)  + "%";

sprintValues.init();
