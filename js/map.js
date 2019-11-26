
    function openMap () {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoibXhkeHR4IiwiYSI6ImNrM2RjcHgxeTE3anUzZHJ0dWE0NWE5NTAifQ.F4B0YzWBKUtqMcqR33e9FA'
    }).addTo(mymap);
    }


    function require(request){

    var options = {
        url: 'http://www.cepaberto.com/api/v2/ceps.json?cep=40010000 [www.cepaberto.com]',
        headers: {
            'Authorization': 'Token token=a860189dca41214721145b548890e8c0'
        }
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
        }
    }
    var request = 0
    request(options, callback);
    }

    window.onload = require;
//window.onload = openMap;
