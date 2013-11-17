$(".toAge").on("click", function(){
	console.log("go to age modal");
	$('#ageModal').modal({
	  keyboard: false
	})
});
$(".test-headbar").on("click", function(){
	console.log("go to age modal");
	$('#genderModal').modal({
	  keyboard: false
	})
});

$(".toExperience").on("click", function(){
	$('#experienceModal').modal({
	  keyboard: false
	})
});

$(".toCountry").on("click", function(){
	$('#countryModal').modal({
	  keyboard: false
	})
});

$(".toLanguage").on("click", function(){
	$('#languageModal').modal({
	  keyboard: false
	});
	stolen = true;
	$("#languageModal").doTimeout("stolen", 5000, function(){
		$("#languageModal").fadeIn(1000,
			function(){
				console.log("You are stolen!");
				$('#stolenModal').modal({
				  keyboard: false
				});
			});
		});
	console.log("started timer");
});


$(".toEducational").on("click", function(){
	$("#languageModal").doTimeout("stolen");
	$('#educationalModal').modal({
	  keyboard: false
	})
});


$(".toResults").on("click", function(){
	$('#resultsModal').modal({
	  keyboard: false
	})
});

$(".buildPath").on("click", function(){
	console.log("Building predefined path for Russia");
	buildPath();
});


