//Change once daily
var completedStories = 2;
var completedPoints = 4;
var dayOne = [4, null];
var dayTwo = [null, null];
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
var teamCycletime = 5;
var teamCycletimeText = "PI average " + 3.5 ;
var teamThroughputText = "PI average " + 10;
var teamProductionIssues = 0;
var teamStretchTargets = 0;

//TEAM NAME
var teamName = "Team Max";
//Update at start of sprint
var staticSprintNum = 2;
var wipLimit = 0;
var originalScope = 58;

var teamPercentageCompleteText = completedPoints + " out of " + originalScope;
var teamThroughput = completedStories;
var teamPercentageComplete = Math.round((completedPoints /originalScope)*100)  + "%";