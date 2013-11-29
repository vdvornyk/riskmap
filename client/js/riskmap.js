// model responsible for all map logic

riskmap.map = function(){

	// TODO: this is hardcoded, need to fix this
	// here is example visualized path to foreing country with milestones to achieve
	var russiaRiskPathCoordinates = [
		new google.maps.LatLng(51.0380556, 31.8861111),
		new google.maps.LatLng(51.2409432, 33.2050521),
		new google.maps.LatLng(51.8666667, 33.4833333),					
		new google.maps.LatLng(53.21667, 34.41667),
		new google.maps.LatLng(54.58333, 36.16667),
		new google.maps.LatLng(55.75, 37.58333)
	];

	var russiaSteps = ['<div id="content">'+
					  '<div id="siteNotice">'+
					  '</div>'+
					  '<h4 id="firstHeading" class="firstHeading">Крок 1. Законодавство Росії</h4>'+
					  '<div id="bodyContent">'+
					  '<p>Які документи необхідно мати для легального працевлаштування на території Росії?</p>'+
					  '<ul><li><a href="#">Все про міграційні карти.</a></li>'+
					  '<li><a href="#">Правила оформлення дозволу на роботу в Росії.</a></li>'+
					  '<li><a href="#">ССкільки насправді можна пеербувати без реєстрації у Москві?.</a></li></ul>'+
					  '</div>'+
					  '</div>', '<div id="content">'+
					  '<div id="siteNotice">'+
					  '</div>'+
					  '<h4 id="firstHeading" class="firstHeading">Крок 2. Знання мови</h4>'+
					  '<div id="bodyContent">'+
					  '<p>Вы хорошо говорите по русски?</p>'+
					  '</div>'+
					  '</div>', '<div id="content">'+
					  '<div id="siteNotice">'+
					  '</div>'+
					  '<h4 id="firstHeading" class="firstHeading">Крок 3. Перевірка майбутного роботодавця або посередника</h4>'+
					  '<div id="bodyContent">'+
					  '<p>Ви задавали ці питання своєму роботодавцю?</p>'+
					  '<ul><li>Чи буде роботодавець оформляти для вас право на роботу?</li>'+
					  '<li>Чи будуть вам платити офіційну зарплатню?</li>'+
					  '<li>Скільки людей, яких ви знаєте вже їздили успішно працювати до цього роботодавця?</li></ul>'+
					  '</div>'+
					  '</div>'];

	var isGeneric = true;
	
	GenderControl = function (controlDiv, map) {

		// Set CSS styles for the DIV containing the control
		// Setting padding to 5 px will offset the control
		// from the edge of the map
		controlDiv.style.padding = '5px';

		// Set CSS for the control border
		var controlUI_man = document.createElement('div');
		controlUI_man.style.backgroundColor = 'white';
		controlUI_man.style.borderStyle = 'solid';
		controlUI_man.style.borderWidth = '2px';
		controlUI_man.style.cursor = 'pointer';
		controlUI_man.style.textAlign = 'center';
		controlUI_man.title = 'Click to filter';
		controlDiv.appendChild(controlUI_man);

		// Set CSS for the control interior
		var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '12px';
		controlText.style.paddingLeft = '4px';
		controlText.style.paddingRight = '4px';
		controlText.innerHTML = '<b>чоловіки</b>';
		controlUI_man.appendChild(controlText);

		var hr = document.createElement('hr');
		hr.style.marginTop = '0px';
		hr.style.marginBottom = '0px';
		controlUI_man.appendChild(hr);

		// Set CSS for the control interior
		var controlText2 = document.createElement('div');
		controlText2.style.fontFamily = 'Arial,sans-serif';
		controlText2.style.fontSize = '12px';
		controlText2.style.paddingLeft = '4px';
		controlText2.style.paddingRight = '4px';
		controlText2.innerHTML = '<b>жінки</b>';
		controlUI_man.appendChild(controlText2);
		
		

		// Setup the click event listeners: filter on man
		google.maps.event.addDomListener(controlText, 'click', function() {
			isGeneric = !isGeneric;
			console.log("change dataset for man");	
			if(!isGeneric){		
				heatmap.setDataSet(testDataMan);
				controlText.style.backgroundColor = '#F78181';
				controlText2.style.backgroundColor = '#fff';
			}
			else{
				heatmap.setDataSet(testData);
				controlText.style.backgroundColor = '#fff';
				controlText2.style.backgroundColor = '#fff';
			}
		});

		// Setup the click event listeners: filter on man
		google.maps.event.addDomListener(controlText2, 'click', function() {
			isGeneric = !isGeneric;
			console.log("change dataset for woman");
			if(!isGeneric){		
				heatmap.setDataSet(testDataWoman);
				controlText2.style.backgroundColor = '#F78181';
				controlText.style.backgroundColor = '#fff';
			}
			else{
				heatmap.setDataSet(testData);
				controlText2.style.backgroundColor = '#fff';
				controlText.style.backgroundColor = '#fff';
			}
		});
	}		


	AgeControl = function (controlDiv, map) {

		var groups = ["до 18", "18-24", "25-39", "більше 40"];
		
		// Set CSS styles for the DIV containing the control
		// Setting padding to 5 px will offset the control
		// from the edge of the map
		controlDiv.style.padding = '5px';

		// Set CSS for the control border
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = 'white';
		controlUI.style.borderStyle = 'solid';
		controlUI.style.borderWidth = '2px';
		controlUI.style.cursor = 'pointer';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to filter';
		controlDiv.appendChild(controlUI);

		for(var i=0; i< groups.length; i++){
			// Set CSS for the control interior
			var controlText = document.createElement('div');
			controlText.style.fontFamily = 'Arial,sans-serif';
			controlText.style.fontSize = '12px';
			controlText.style.paddingLeft = '4px';
			controlText.style.paddingRight = '4px';
			controlText.innerHTML = '<b>' + groups[i] + '</b>';
			controlUI.appendChild(controlText);
			
			if(i<groups.length-1){
				var hr = document.createElement('hr');
				hr.style.marginTop = '0px';
				hr.style.marginBottom = '0px';
				controlUI.appendChild(hr);
			}		
		}

		// Setup the click event listeners: filter on man
		google.maps.event.addDomListener(controlUI, 'click', function() {
			console.log("change dataset for age");
			heatmap.setDataSet(testData);
		});
	}				  


	AdviceControl = function (controlDiv, map) {

		var groups = ["до 18", "18-24", "25-39", "більше 40"];
		
		// Set CSS styles for the DIV containing the control
		// Setting padding to 5 px will offset the control
		// from the edge of the map
		controlDiv.style.padding = '5px';

		// Set CSS for the control border
		var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = 'white';
		controlUI.style.borderStyle = 'solid';
		controlUI.style.borderWidth = '2px';
		controlUI.style.cursor = 'pointer';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to filter';
		controlDiv.appendChild(controlUI);

		for(var i=0; i< groups.length; i++){
			// Set CSS for the control interior
			var controlText = document.createElement('div');
			controlText.style.fontFamily = 'Arial,sans-serif';
			controlText.style.fontSize = '12px';
			controlText.style.paddingLeft = '4px';
			controlText.style.paddingRight = '4px';
			controlText.innerHTML = '<b>' + groups[i] + '</b>';
			controlUI.appendChild(controlText);
			
			if(i<groups.length-1){
				var hr = document.createElement('hr');
				hr.style.marginTop = '0px';
				hr.style.marginBottom = '0px';
				controlUI.appendChild(hr);
			}		
		}

		// Setup the click event listeners: filter on man
		google.maps.event.addDomListener(controlUI, 'click', function() {
			console.log("change dataset for age");
			heatmap.setDataSet(testData);
		});
	}
	
	// help function to put generic marker on the map
	addMarker = function (latlng) {
		var marker = new google.maps.Marker({
			position: latlng,  
		});
		marker.setMap(map);
		map.panTo(latlng);
	}
	
	// TODO: hard-coded, rework this
	buildPath = function () {
		// attempt to build risk path to Russia
		var riskPath = new google.maps.Polyline({
			path: russiaRiskPathCoordinates,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		});

		var windows = new Array()
		var markers = new Array()
		for (var i = 0; i < russiaSteps.length; i++) {
			var window = new google.maps.InfoWindow({
				content: russiaSteps[i]
			});
			windows.push(window);
			var marker = new google.maps.Marker({
				position: russiaRiskPathCoordinates[2 * i + 1],
				map: map,
				title: 't',
				icon: 'img/warning.png'
			});
			markers.push(marker);
		}
		for (var i = 0; i < russiaSteps.length; i++) {
			var window = windows[i];
			var marker = markers[i];
			console.log(windows[i].content);

			(function (_td, _marker, _window) {
				_td.addListener(_marker, 'click', function () {
					console.log(_window.content);
					_window.open(map, _marker);
				});
			})(google.maps.event, marker, window);

		}

		riskPath.setMap(map);
	}

	var oPublic = {
		GenderControl: GenderControl,
		AgeControl: AgeControl,
		AdviceControl: AdviceControl,
		
		buildPath: buildPath,
		addMarker: addMarker
	};

	return oPublic;	
			
}();		
				  