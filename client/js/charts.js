// model responsible for all charts releated logic

riskmap.charts = function(){

	drawGenderVisualization = function() {
		console.log("start gender visualization chart");
		
		// Create and populate the data table.
		var data = google.visualization.arrayToDataTable([
		  ['Стать', 'Кількість людей'],
		  ['Чоловіки', 42000],
		  ['Жінки', 78000]
		]);	
			
		// Create and draw the visualization.
		new google.visualization.PieChart(document.getElementById('visualization')).
			draw(data, 
				{title: "Кількість постраждалих від торгівлі людьми українців", 
				legend: {position: "right"}, 
				pieSliceText: "value", 
				tooltip : {text : "percentage"}, 
				colors: ["#1E90FF", "#FF1493"],
				//pieHole : 0.4,
				pieSliceTextStyle : {fontSize: 15, color: "#000"}
				});
		console.log("drown gender visualization chart");	
	}
	
	var oPublic = {
		drawGenderVisualization: drawGenderVisualization
	};
	
	return oPublic;
	
}();