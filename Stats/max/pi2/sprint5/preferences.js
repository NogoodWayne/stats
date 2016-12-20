//Change once daily
var completedStories = 0;
var completedPoints = 0;
var dayOne = [null, null];
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
var teamCycletime = 0;
var teamCycletimeText = "PI average " + 0 ;
var teamThroughputText = "PI average " + 0;
var teamPercentageComplete = 0 + "%";
var teamProductionIssues = 0;
var teamStretchTargets = 0;

//TEAM NAME
var teamName = "Team Max";
//Update at start of sprint
var staticSprintNum = 0;
var wipLimit = 0;
var originalScope = 0;

var teamPercentageCompleteText = completedPoints + " out of " + originalScope;
var teamThroughput = completedStories;
