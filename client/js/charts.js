function drawGenderVisualization() {
	console.log("start 1st chart");
	
	// Create and populate the data table.
	var data = google.visualization.arrayToDataTable([
	  ['Стать', 'Кількість людей'],
	  ['Чоловіки', 42000],
	  ['Жінки', 78000]
	]);
	
		
	console.log("data created");

	// Create and draw the visualization.
	new google.visualization.PieChart(document.getElementById('visualization')).
		draw(data, 
			{title: "Кількість постраждалих від торгівлі людьми українців", 
			legend: {position: "right"}, 
			pieSliceText: "value", 
			tooltip : {text : "percentage"}, 
			colors: ["#1E90FF", "#FF1493"],
			pieHole : 0.4,
			pieSliceTextStyle : {fontSize: 13, color: "#000"},
			chartArea:{left: "20%", top: "25%", width:"75%",height:"70%"},
			heigth: 500,
			width: 500
			});
	console.log("drawn");	
}
