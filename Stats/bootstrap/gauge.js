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
  