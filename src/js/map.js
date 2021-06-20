var regions = {
    'batken': "../data/regions/batken/batken.json",
    'kadamjai':'../data/regions/batken/kadamjai.json',
    'leilek':'../data/regions/batken/leilek.json',
    'alamudun':'../data/regions/chui/alamudun.json',
    'chui':'../data/regions/chui/chui.json',
    'issik-ata':'../data/regions/chui/issik-ata.json',
    'jail':'../data/regions/chui/jail.json',
    'kemin':'../data/regions/chui/kemin.json',
    'moskva':'../data/regions/chui/moskva.json',
    'panfilov':'../data/regions/chui/panfilov.json',
    'sokuluk':'../data/regions/chui/sokuluk.json',
    'ak-sui':'../data/regions/issik-kul/ak-sui.json',
    'issik-kul':'../data/regions/issik-kul/issik-kul.json',
    'jedi-oguz':'../data/regions/issik-kul/jedi-oguz.json',
    'ton':'../data/regions/issik-kul/ton.json',
    'tup':'../data/regions/issik-kul/tup.json',
    'aksiy':'../data/regions/jalal-abad/aksiy.json',
    'ala-bukin':'../data/regions/jalal-abad/ala-bukin.json',
    'bazar-korgon':'../data/regions/jalal-abad/bazar-korgon.json',
    'chatcal':'../data/regions/jalal-abad/chatcal.json',
    'nooken':'../data/regions/jalal-abad/nooken.json',
    'suzak':'../data/regions/jalal-abad/suzak.json',
    'toguz-toro':'../data/regions/jalal-abad/toguz-toro.json',
    'toktogul':'../data/regions/jalal-abad/toktogul.json',
    'ak-tala':'../data/regions/naryn/ak-tala.json',
    'at-bashi':'../data/regions/naryn/at-bashi.json',
    'jumgal':'../data/regions/naryn/jumgal.json',
    'kochkor':'../data/regions/naryn/kochkor.json',
    'naryn':'../data/regions/naryn/naryn.json',
    'alai':'../data/regions/osh/alai.json',
    'aravan':'../data/regions/osh/aravan.json',
    'chon-alai':'../data/regions/osh/chon-alai.json',
    'kara-kulja':'../data/regions/osh/kara-kulja.json',
    'kara-sui':'../data/regions/osh/kara-sui.json',
    'nookat':'../data/regions/osh/nookat.json',
    'uzgen':'../data/regions/osh/uzgen.json',
    'bakai-ata':'../data/regions/talas/bakai-ata.json',
    'kara-buurin':'../data/regions/talas/kara-buurin.json',
    'manas':'../data/regions/talas/manas.json',
    'talas':'../data/regions/talas/talas.json',    
};

var colors = [
    'rgba(235, 134, 75, 0.6)',
    'rgba(209, 120, 68, 0.6)',
    'rgba(161, 94, 55, 0.6)',
    'rgba(81, 168, 255, 0.6)',
    'rgba(76, 154, 232, 0.6)',
    'rgba(76, 154, 232, 0.6)',
    'rgba(59, 121, 183, 0.6)',
    'rgba(53, 104, 155, 0.6)',
    'rgba(45, 88, 132, 0.6)',
    'rgba(40, 75, 110, 0.6)',
    'rgba(9, 57, 104, 0.6)',
    'rgba(72, 226, 48, 0.6)',
    'rgba(63, 191, 43, 0.6)',
    'rgba(51, 156, 35, 0.6)',
    'rgba(38, 118, 25, 0.6)',
    'rgba(26, 144, 8, 0.6)',
    'rgba(84, 175, 70, 0.6)',
    'rgba(76, 131, 248, 0.6)',
    'rgba(76, 131, 248, 0.6)',
    'rgba(76, 131, 248, 0.6)',
    'rgba(55, 94, 176, 0.6)',
    'rgba(49, 82, 155, 0.6)',
    'rgba(49, 82, 155, 0.6)',
    'rgba(49, 82, 155, 0.6)',
    'rgba(49, 82, 155, 0.6)',
    'rgba(49, 82, 155, 0.6)',
    'rgba(56, 102, 234, 0.6)',
    'rgba(50, 91, 205, 0.6)',
    'rgba(46, 81, 180, 0.6)',
    'rgba(41, 70, 153, 0.6)',
    'rgba(34, 58, 129, 0.6)',
    'rgba(28, 48, 106, 0.6)',
    'rgba(28, 48, 106, 0.6)',
    'rgba(28, 48, 106, 0.6)',
    'rgba(28, 48, 106, 0.6)',
    'rgba(43, 111, 199, 0.6)',
    'rgba(40, 102, 184, 0.6)',
    'rgba(37, 90, 160, 0.6)',
    'rgba(31, 79, 141, 0.6)',
    'rgba(31, 79, 141, 0.6)',
    'rgba(21, 52, 93, 0.6)',
    'rgba(34, 112, 147,.6)',
    'rgba(44, 44, 84,.6)',
    'rgba(204, 174, 98,.6)',
]
var translate = {
            'apple':'Яблоки',
            'apricots':'Абрикросы',
            'barley':'Ячмень',
            'beans':'Бобовые',
            'beetroot':'Свекла',
            'cherries':'Вишня',
            'corn':'Кукуруза',
            'cotton':'Хлопок',
            'currants':'Смородина',
            'pear':'Груши',
            'grapes':'Виноград',
            'hay':'Сено',
            'peach':'Персики',
            'potatoes':'Картошка',
            'raspberry':'Малина',
            'rice':'Рис',
            'sugar-beet':'Сахарная свекла',
            'sunflower':'Подсолнечники',
            'vegetables':'Овощи',
            'watermelons':'Арбузы',
            'wheat':'Пшеница'
};

$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGRzYWludCIsImEiOiJja2k4aTM2ZWwwNjB5MnRsY291OWl3OWlmIn0.aVPzSWzdwwYet2-GHZNWkQ';
    var clicks = true;
    // var latitude = 75
    // var longitude = 41
    var city = document.getElementById('location-city');
    var country = document.getElementById('location-country');

    var info = false;
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [75, 41.1], // starting position [lng, lat]
        maxZoom: 20,
        minZoom: 6,
        zoom: 6,
        attributionControl: false,
    });

    var talas = {
        'talas': 'talas',
        'vegetables': [71.56, 42.66],
        'corn': [71.12, 42.46],
        'apple': [71.54, 42.23],
        'apricots': [72.06, 42.20],
        'beans': [72.09, 42.56],
        'potatoes': [72.44, 42.53],
        'wheat': [72.53, 42.22],
        'sugar-beet': [72.85, 42.47],
        'hay': [72.88, 42.17],
        'peach': [73.19, 42.42]
    };
    var naryn = {
        'naryn': 'naryn',
        'barley': [75.07, 41.96],
        'hay': [75.03, 41.71],
        'potatoes': [75.63, 41.81]
    };
    var batken = {
        'batken': 'batken',
        'corn': [69.58, 39.79],
        'barley': [69.90, 39.99],
        'hay': [69.78, 39.78],
        'cherries': [70.23, 39.95],
        'pear': [70.97, 39.58],
        'peach': [71, 40.02],
        'apricot': [71.28, 39.60],
        'apple': [71.42, 50.25],
        'grapes': [72.01, 40.22],
        'rice': [72.28, 39.92]
    };
    var jalal = {
        'jalal': 'jalal',
        'rice': [70.86, 41.67],
        'wheat': [73.23, 41.31],
        'sunflower': [71.46, 51.58],
        'barley': [71.36, 41.79],
        'corn': [71.93, 41.82],
        'beans': [72.38, 41.73],
        'vegetables': [72.52, 41.32],
        'peach': [73.09, 41.23],
        'apple': [73.46, 41.50],
        'pear': [73.97, 41.40],
        'cotton': [73.43, 41.14],
    };
    var osh = {
        'osh': 'osh',
        'rice': [72.66, 40.31],
        'apple': [72.70, 40.24],
        'peach': [72.38, 39.57],
        'grapes': [72.98, 39.68],
        'pear': [72.95, 40.12],
        'hay': [72.84, 40.40],
        'barley': [73.20, 40.66],
        'cotton': [73.45, 40.323],
        'apricot': [73.74, 40.55],
        'corn': [73.76, 40.65],
        'beans': [73.65, 39.85],
        'wheat': [73.81, 39.65],
        'potatos': [74.49, 40.52, ]
    };
    var chui = {
        'chui': 'chui',
        'barley': [74.22, 42.09],
        'sunflower': [73.69, 42.97],
        'wheat': [74.02, 42.95],
        'corn': [74.34, 42.88],
        'sugar-beet': [74.88, 42.86],
        'beans': [74.89, 42.60],
        'grapes': [75.56, 42.72],
        'peach': [74.46, 42.66],
        'vegetables': [74.17, 42.56],
        'watermelons': [73.78, 42.75],
        'potatos': [74.04, 42.35],
        'apple': [73.78, 42.17],
        'pear': [73.66, 42.79],
        'hay': [74.22, 42.24],
    };
    var issyk = {
        'issyk': 'issyk',
        'raspberry': [76.25, 42.23],
        'beans': [77.13, 42.03],
        'hay': [77.66, 42.08],
        'currants': [77.57, 41.81],
        'pear': [78.60, 42.09],
        'wheat': [78.12, 42.33],
        'barley': [78.75, 41.87],
        'apple': [78.90, 42.28],
        'peach': [79.11, 42.29],
        'potatos': [78.42, 42.56]
    };

    map.addControl(new MapboxLanguage({
        defaultLanguage: 'ru'
    }));

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');
    var geo = new mapboxgl.GeolocateControl();
    map.addControl(geo, 'bottom-right');

    var scale = new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'imperial'
    });
    map.addControl(scale);
    scale.setUnit('metric');

    var main_address = [{
        'id': 1,
        'city': 'Министерство сельского хозяйства, пищевой промышленности и мелиорации Кыргызской Республики',
        'country': "Ул.Киевская 96а",
        'camera': {
            center: [74.60351506475995, 42.874049104620184],
            zoom: 18,
            pitch: 50,
            bearing: 160
        }
    }];

    var locations = [{
            'id': 1,
            'city': 'Бишкек',
            'country': 'Чуйская область',
            'camera': {
                center: [74.56714000979905, 42.87584732690511],
                zoom: 11,
                pitch: 80,
                bearing: -20
            }
        }, {
            'id': 2,
            'city': 'Талас',
            'country': 'Таласская область',
            'camera': {
                center: [72.22198178579627, 42.55788484633985],
                zoom: 14,
                pitch: 140,
                bearing: 200
            }
        }, {
            'id': 3,
            'city': 'Джалал-Абад',
            'country': 'Джалал-Абадская область',
            'camera': {
                center: [72.98071823329533, 40.93441319677905],
                zoom: 13,
                pitch: 50,
                bearing: 190
            }
        }, {
            'id': 4,
            'city': 'Ош',
            'country': 'Ошская область',
            'camera': {
                center: [72.8160644422592, 40.513331776324634],
                zoom: 11,
                pitch: 40,
                bearing: 100
            }
        },
        {
            'id': 5,
            'city': 'Баткен',
            'country': 'Баткенская область',
            'camera': {
                center: [70.8213472324224, 40.055259930336526],
                zoom: 12,
                pitch: 10,
                bearing: 160
            }
        },
        {
            'id': 6,
            'city': 'Нарын',
            'country': 'Нарынская область',
            'camera': {
                center: [75.98404082744595, 41.426978414966136],
                zoom: 13,
                pitch: 80,
                bearing: 10
            }
        },
        {
            'id': 7,
            'city': 'Иссык-Куль',
            'country': 'Иссык-Кульская область',
            'camera': {
                center: [77.27252433876667, 42.37472733142336],
                zoom: 8,
                pitch: 200,
                bearing: 360
            }
        },
        {
            'id': 8,
            'city': '',
            'desription': "",
            'camera': {
                center: [75, 41.1],
                zoom: 6,
                pitch: 0,
                bearing: 0
            }
        }
    ];

    function rotateCamera(timestamp) {
        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map.rotateTo((timestamp / 100) % 360, {
            duration: 0
        });
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
    }

    function highlightBorough(code) {
        map.setFilter('highlight', ['==', 'borocode', code]);
    }

    function playback(index) {
        city.textContent = locations[index].city;
        country.textContent = locations[index].country;
        $('div.cover__guide').find('.cover__guide-info')
            .addClass('cover__guide-info_active');
        // Animate the map position based on camera properties
        map.flyTo(locations[index].camera);

        map.once('moveend', function() {
            // Duration the slide is on screen after interaction
            let myvar = setTimeout(function() {
                // Increment index
                index = index + 1 === locations.length ? 0 : index + 1;
                playback(index);
                console.log(index);
                if (index === 7) {
                    $('div.cover__guide').find('.cover__guide-info_active')
                        .removeClass('cover__guide-info_active');
                }
            }, 3000); // After callback, show the location for N seconds.
            if (index === 7) {
                clearTimeout(myvar);
            }
        });
    }


    $("#guide").click(() => {
        playback(0);
    });

    $("#satellite").click(() => {
        if (clicks) {
            map.setStyle('mapbox://styles/mapbox/satellite-v9');
            clicks = false;
        } else {
            map.setStyle('mapbox://styles/mapbox/streets-v11');
            clicks = true;
        }

    })

    $("#address").click(() => {
        if (clicks) {
            map.flyTo(main_address[0].camera);
            city.textContent = main_address[0].city;
            country.textContent = main_address[0].country;
            map.once('moveend', function() {
                $('div.cover__guide').find('.cover__guide-info')
                    .addClass('cover__guide-info_active');
                clicks = false;
            });
        } else {
            map.flyTo(locations[7].camera);
            $('div.cover__guide').find('.cover__guide-info_active')
                .removeClass('cover__guide-info_active');
            clicks = true;
        }
    });

/*
* 
* Check event click for showing markers
* 
*/

    $("#check").click(() => {
        var cult;
        var arrObj = ['#chui', '#naryn', '#issyk', '#batken', '#talas', '#osh', '#jalal', '#rigions'];
        var arrCountrys = [chui, naryn, issyk, batken, talas, osh, jalal];
        for (let index = 0; index <= arrObj.length; index++) {
            if ($(arrObj[index]).prop('checked') == true) {
                if (arrObj[index].replace('#', '') == Object.keys(arrCountrys[index])[0]) {
                    Object.entries(arrCountrys[index]).forEach(([key, value]) => {
                        if (arrObj[index].replace('#', '') == key) {
                            return;
                        } else {
                            for (text in translate){
                                if (key == text){
                                    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                                        translate[text]
                                    );
                                }
                            }
                            cult = document.createElement('div');
                            $(cult).addClass(arrObj[index].replace('#', ''));
                            cult.id = key;
                            new mapboxgl.Marker(cult)
                                .setLngLat(value)
                                .setPopup(popup)
                                .addTo(map);
                        }
                    });
                }
            } else if ($(arrObj[index]).prop('checked') == false) {
                $('.' + arrObj[index].replace('#', '')).remove();
            }
        }
    });

function removeLayers(){
    for (let index = 0; index <= 4; index++) {
        if (map.getLayer(index.toString())) map.removeLayer(index.toString());
    }
}
/*
*
* Function for map load
*
*/

var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

    map.on('load', function() {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;
        
        Object.entries(regions).forEach(([key, value], index) => {
            map.addSource(key.toString(), {
                'type': 'geojson',
                'data': value
            });
            //fill layers
            map.addLayer({
                'id': key.toString(),
                'type': 'fill',
                'source': key.toString(),
                'paint': {
                'fill-color': 'rgba(30, 39, 46,.6)',
                'fill-outline-color': '#fff'
                }    
            });
            //text layers
            map.addLayer({
                'id': "symbol_" + key.toString(),
                'type': 'symbol',
                'source': key.toString(),
                'layout': {
                // get the title name from the source's "title" property
                'text-field': ['get', 'title_ru'],
                'text-font': [
                'Open Sans Semibold',
                'Arial Unicode MS Bold'
                ],
                'text-variable-anchor': ['top'],
                'text-radial-offset': 0.5,
                "text-size": 12,
                "text-allow-overlap": true,
                },'paint': {
                    "text-color": "#ffffff"
                  }
                });

                map.addSource('fill_'+ key.toString(), {
                    'type': 'geojson',
                    'data': value 
                });
                map.addLayer({
                    'id': 'fill_'+ key.toString(),
                    'type': 'fill',
                    'source': key.toString(),
                    'paint': {
                    'fill-color': 'rgba(46, 204, 113,.6)',
                    'fill-outline-color': 'rgba(236, 240, 241,1.0)'
                    },
                });
            map.setLayoutProperty('fill_' + key.toString(), 'visibility', 'none');
            mapClick(key, value);
        });
        

        function mapClick(id, source){
            map.on('click', id.toString(), function (e) {
            $('div.active_close').attr('class','active_close-active');
            map.doubleClickZoom.disable();
            map.dragPan.disable();
            map.scrollZoom.disable();
            $('.modal__title > p').text(e.features[0].properties.title_ru + " район");
            map.flyTo({center: [e.features[0].properties.position_lng, e.features[0].properties.position_lat],
                     zoom: e.features[0].properties.zoom, bearing: e.features[0].properties.bearing});
            $('div.modal-active').attr('class','modal');
            map.setLayoutProperty(id.toString(), 'visibility', 'none');
            map.setLayoutProperty('fill_' + id.toString(), 'visibility', 'visible');
            $("#close").click(() => {
                $('div.active_close-active').attr('class','active_close');
                map.doubleClickZoom.enable();
                map.dragPan.enable();
                map.scrollZoom.enable();
                $('div.modal').attr('class','modal modal-active');
                map.flyTo({center: [75, 41.1], zoom:6, bearing: 0});
                map.setLayoutProperty(id.toString(), 'visibility', 'visible');
                map.setLayoutProperty('fill_' + id.toString(), 'visibility', 'none');
            });
            $("#active_close").click(() => {
                alert("Для взаимодействия с картой закройте модальное окно!")
            });
        });
        
        map.on('click', id.toString(), function () {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });

        /*
         * 
         * Only for develop
         * Script for showing coordinates
         *  
         */
        // map.on('mousemove', function (e) {
        //     document.getElementById('info_lng').innerHTML =
        //     JSON.stringify(Math.floor(e.lngLat.lng * 100) / 100);
        //     document.getElementById('info_lat').innerHTML =
        //     JSON.stringify(Math.floor(e.lngLat.lat * 100) / 100);
        //     document.getElementById('all_info').innerHTML =
        //     JSON.stringify(Math.floor(e.lngLat.lng * 100) / 100 
        //                   + ',' + Math.floor(e.lngLat.lat * 100) / 100);
        // });
}

/*
*
* Map 3D layer
*
*/

function showLayers_test(click){
    var cult;
    var arrObj = ['#osh'];
    var arrCountrys = [osh];
    for (let index = 0; index <= arrObj.length; index++) {
            if (arrObj[index].replace('#', '') == Object.keys(arrCountrys[index])[0]) {
                Object.entries(arrCountrys[index]).forEach(([key, value]) => {
                    if (arrObj[index].replace('#', '') == key) {
                        return;
                    } else {
                        for (text in translate){
                            if (key == text){
                                var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                                    translate[text]
                                );
                            }
                        }
                        cult = document.createElement('div');
                        $(cult).addClass(arrObj[index].replace('#', ''));
                        cult.id = key;
                        new mapboxgl.Marker(cult)
                            .setLngLat(value)
                            .setPopup(popup)
                            .addTo(map);
                    }
                });
            }
    }
}
        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#27ae60',

                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                'fill-extrusion-height': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05, ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05, ['get', 'min_height']
                ],
                'fill-extrusion-opacity': .7
            }
        }, );
    });
});