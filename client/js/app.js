var map;
var heatmap;

var buildPath;

window.onload = function () {
    var myLatlng = new google.maps.LatLng(50.4501, 30.5234);
    // sorry - this demo is a beta
    // there is lots of work todo
    // but I don't have enough time for eg redrawing on dragrelease right now
    var myOptions = {
    zoom: 5,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: true,
    draggable: true,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: true,
    disableDoubleClickZoom: false
    };
map = new google.maps.Map(document.getElementById("heatmapArea"), myOptions);

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
    };

    var manControlDiv = document.createElement('div');
        var manControl = new GenderControl(manControlDiv, map);

        manControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(manControlDiv);

        var ageControlDiv = document.createElement('div');
        var ageControl = new AgeControl(ageControlDiv, map);

        ageControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ageControlDiv);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(
                document.getElementById('legend'));


        heatmap = new HeatmapOverlay(map, {"radius": 25, "visible": true, "opacity": 60});


        // this is important, because if you set the data set too early, the latlng/pixel projection doesn't work
    google.maps.event.addListenerOnce(map, "idle", function () {
            heatmap.setDataSet(testData);
        });


        //MARKER FOR MOSKOV

        var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Посольство украины в россии</h1>'+
                '<div id="bodyContent">'+
                '<p>Москва, Леонтьевский переулок, 18.</p>'+
                '<p>Телефон: (00 7495) 629 35 42 (канцелярія), 629 46 40 (приймальна Посла) 629 97 42, 629-69-22 ' +
                '(довідки з консульських питань) Гаряча лінія Посольства ' +
                '(прохання телефонувати виключно в разі загрози життю чи загибелі громадян України): +7 919 768 77 96.'
                 '   Факс: (495) 629 46 81'+
                    'Ел. пошта: emb_ru@mfa.gov.ua</p>'+
                '<p>Сайт <a href="http://russia.mfa.gov.ua/ua">'+
                'http://russia.mfa.gov.ua/ua</a> '+
                '</p>'+
                '</div>'+
                '</div>';


        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var myLatlng = new google.maps.LatLng(55.76117, 37.60577);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Посольство Украины в Москве',
            icon: 'https://cdn1.iconfinder.com/data/icons/PLASTICXP/medical/png/24/emergency.png'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

    };

