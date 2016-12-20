var numOfDays = getBusinessDatesCount(startDate,endDate);
var sprintNum = whichSprint();
var numOfSprintDays = getBusinessDatesCount(today,currentSprintEndDate, sprintStart);

function getBusinessDatesCount(startDate, endDate, sprintStart) {
    var count = 0;
    var curDate = startDate;
	
	if(curDate > endDate){return 0;}
	if(sprintStart > curDate){return 10;}
	
    while (curDate <= endDate) {
        var dayOfWeek = curDate.getDay();
        if(!((dayOfWeek == 6) || (dayOfWeek == 0)))
           count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

function whichSprint(){
	
	var currentSprint = staticSprintNum;
	var now = today;
	
	if(currentSprint === 1){
		currentSprintEndDate = sprint1End;	
		sprintStart = sprint1Start;	
	}
	else if(currentSprint === 2){
		currentSprintEndDate = sprint2End;	
		sprintStart = sprint2Start;
	}
	else if(currentSprint === 3){
		currentSprintEndDate = sprint3End;	
		sprintStart = sprint3Start;	
	}
	else if(currentSprint === 4){
		currentSprintEndDate = sprint4End;	
		sprintStart = sprint4Start;	
	}
	else if(currentSprint === 5){
		currentSprintEndDate = sprint5End;	
		sprintStart = sprint5Start;	
	}
	else if(currentSprint === 6){
		currentSprintEndDate = sprint6End;	
		sprintStart = sprint6Start;
	}
	else {
		currentSprint = 0;
		currentSprintEndDate = now;
	}
	
	return currentSprint;
}

/* var text = [
"<marquee id=\"scroll\" class=\"wps-html-effects\" direction=\"left\" behavior=\"scroll\" scrollamount=\"10\">Next meeting: Planning Thursday 10AM</marquee>", 
"<marquee>I like tacos</marquee>"

];
var counter = 0;
setInterval(change, 4000);
function change() {
    document.getElementById("scroll").innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
} */

function drawHealthChart(divId, name) {

	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  [name, latestHealth],
	]);

	var options = {
	  width: HealthWidth, height: HealthHeight,
	  redFrom: HealthRedFrom, redTo: HealthRedTo,
	  yellowFrom:HealthYellowFrom, yellowTo: HealthYellowTo,
	  greenFrom:HealthGreenFrom, greenTo:HealthGreenTo,
	  minorTicks: 10
	};

	var chart = new google.visualization.Gauge(document.getElementById(divId));

	chart.draw(data, options);
  }
  
  function drawChart(divId, name, width, height, green, red, value, max, min, units) {

	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  ['', value],
	]);
	
	var redStart = null; 
	var redEnd = null;
	var yellowStart = null; 
	var yellowEnd = null;
	var greenStart = null;
	var greenEnd = null;
	
	if(red !== null){
		redStart = 0; 
		redEnd = max * (red / 100);
		yellowStart = max * (red / 100);
		yellowEnd = max * (green / 100);
	}
	
	if(green !== null){
		greenStart = max * (green / 100);
		greenEnd = max;
	}

	var options = {
	  width: width, height: height,
 	  redFrom: redStart, redTo: redEnd,
	  yellowFrom: yellowStart, yellowTo: yellowEnd, 
	  greenFrom: greenStart, greenTo:greenEnd,
	  majorTicks: [
					  0,
					  Math.round((max/5)*1),
					  Math.round((max/5)*2),
					  Math.round((max/5)*3),
					  Math.round((max/5)*4),
					  Math.round((max/5)*5)
				  ],
	  minorTicks: 2,
	  max:max,
	  min:min
	  
	};
	
	var formatter = new google.visualization.NumberFormat(
		{suffix: units,pattern:'#'}
	);
	formatter.format(data,1);
	
	var chart = new google.visualization.Gauge(document.getElementById(divId));

	chart.draw(data, options);
	$("#"+ divId + "Name").text(name);
  }
  
  function drawCoverageChart() {

	var data = google.visualization.arrayToDataTable([
	  ['Label', 'Value'],
	  ['Coverage', 2],
	]);

	var options = {
	  width: 800, height: 240,
	  redFrom: 0, redTo: 50,
	  yellowFrom:50, yellowTo: 75,
	  greenFrom:75, greenTo:100,
	  minorTicks: 10
	};

	var chart = new google.visualization.Gauge(document.getElementById('chart_coverage'));

	chart.draw(data, options);
  }
  
  function drawBurnDownChart(sprintData) {

     var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Ideal');
      data.addColumn('number', 'Actual');
      data.addColumn('number', 'WIP Limit');
	  data.addColumn('number', 'WIP Actual');

      data.addRows(sprintData);

      var options = {
        chart: {
          title: 'Sprint 1',
        },
        width: 1200,
        height: 400,
		backgroundColor: '#000',
		fontSize: 15,
		lineWidth: 4,
		hAxis: {
			textStyle:{color: '#FFF'},
			gridlines:{color: '#000'}
		},
		vAxis: {
			textStyle:{color: '#FFF'},
			gridlines:{color: '#000'}
		},
		legend: {
			textStyle:{color: '#FFF'}
		},
		series: {
            0: { color: 'red' },
            1: { color: 'blue' },
            2: { color: 'green' },
            3: { color: 'white' },
          }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_burndown'));
      chart.draw(data, options);
    }
	
	  function drawPIBurnUpChart() {

     var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Release Target');
	  data.addColumn('number', 'Ideal');
      data.addColumn('number', 'Actual');

      data.addRows([
		[0,  163,  0, null],
        [1,  163, 27.2, null],
        [2,  163, 54.3, null],
        [3,  163, 81.5, null],
        [4,  163, 108.7, null],
        [5,  163, 135.8, null],
        [6,  163, 163.00, null],
      ]);
	  

      var options = {
        chart: {
          title: 'Sprint 1',
        },
        width: 1200,
        height: 400,
		backgroundColor: '#000',
		fontSize: 15,
		lineWidth: 4,
		hAxis: {
			textStyle:{color: '#FFF'},
			gridlines:{color: '#000'}
		},
		vAxis: {
			textStyle:{color: '#FFF'},
			gridlines:{color: '#000'}
		},
		legend: {
			textStyle:{color: '#FFF'}
		},
		series: {
            0: { color: 'red' },
            1: { color: 'blue' },
			2: {color: 'yellow'}
          }

      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_PIburnup'));
      chart.draw(data, options);
    }
	
var days = [[0, 0],dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven, dayEight, dayNine, dayTen];

function getGraphData(){
	//build array of arrays
	sprintValues.setHighestScore(10);
	
	var data = [];
	var slope = originalScope / 10;
	
	for(var i = 0; i < 11; i++){
		var done = null;
		
		if(days[i][0] !== null){done = originalScope - days[i][0]}
			
		data[i] = [i, originalScope - (i * slope), done, wipLimit, days[i][1]];	
		
	}		  
	return data;
}
var sprintData = getGraphData();

function getTotalPoints(){
	var point = 0;
	var i =0;
	while(i < 11){ 
		if(days[i][0] !== null)
			point = days;
	}
	return points;
}