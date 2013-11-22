function drawGenderVisualization() {
	// Create and populate the data table.
	var data = google.visualization.arrayToDataTable([
	  ['Стать', 'Кiлькiсть людей'],
	  ['Чоловiки', 42000],
	  ['Жiнки', 78000]
	]);

	// Create and draw the visualization.
	new google.visualization.PieChart(document.getElementById('visualization')).
	draw(data, {title: "Кiлькiсть постраждалих вiд торгiвлi людьми з 1990 р."});
}