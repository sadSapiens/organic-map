$(document).ready(function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGRzYWludCIsImEiOiJja2k4aTM2ZWwwNjB5MnRsY291OWl3OWlmIn0.aVPzSWzdwwYet2-GHZNWkQ';



    // var latitude = 75
    // var longitude = 41
    var title = document.getElementById('location-title');
    var description = document.getElementById('location-description');

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

    // // create the popup
    // var popup = new mapboxgl.Popup({
    //     offset: 25
    // }).setText(
    //     'Construction on the Washington Monument began in 1848.'
    // );

    var talas = {
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
        'barley': [75.07, 41.96],
        'hay': [75.03, 41.71],
        'potatoes': [75.63, 41.81]
    };
    var batken = {
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





    let arr = new Array();
    arr = ['apple',
            'apricots',
            'barley',
            'beans',
            'beetroot',
            'cherries',
            'corn',
            'cotton',
            'currants',
            'pear',
            'grapes',
            'hay',
            'peach',
            'potatoes',
            'raspberry',
            'rice',
            'sugar-beet',
            'sunflower',
            'vegetables',
            'watermelons',
            'wheat'
        ]
        //array
    for (let index = 0; index < arr.length; index++) {
        var el = document.createElement('div');
        el.id = arr[index];
    }


    // // create the marker
    // new mapboxgl.Marker(el)
    // .setLngLat(monument)
    // .setPopup(popup) // sets a popup on this marker
    // .addTo(map);

    map.on('mousemove', function(e) {
        document.getElementById('info').innerHTML =
            // e.point is the x, y coordinates of the mousemove event relative
            // to the top-left corner of the map
            JSON.stringify(e.point) +
            '<br />' +
            // e.lngLat is the longitude, latitude geographical position of the event
            JSON.stringify(e.lngLat.wrap());
    });

    map.addControl(new MapboxLanguage({
        defaultLanguage: 'ru'
    }));

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');

    var scale = new mapboxgl.ScaleControl({
        maxWidth: 100,
        unit: 'imperial'
    });
    map.addControl(scale);
    scale.setUnit('metric');
    // var talas = new mapboxgl.Marker()
    //     .setLngLat([72.22198178579627, 42.55788484633985])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Талас</h1>"))
    //     .addTo(map);

    // var naryn = new mapboxgl.Marker()
    //     .setLngLat([75.98404082744595, 41.426978414966136])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Нарын</h1>"))
    //     .addTo(map);

    // var batken = new mapboxgl.Marker()
    //     .setLngLat([70.8213472324224, 40.055259930336526])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Баткен</h1>"))
    //     .addTo(map);

    // var bishkek = new mapboxgl.Marker()
    //     .setLngLat([74.56714000979905, 42.87584732690511])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Бишкек</h1>"))
    //     .addTo(map);

    // var osh = new mapboxgl.Marker()
    //     .setLngLat([72.8160644422592, 40.513331776324634])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Ош</h1>"))
    //     .addTo(map);

    // var djal = new mapboxgl.Marker()
    //     .setLngLat([72.98071823329533, 40.93441319677905])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Джалал-Абад</h1>"))
    //     .addTo(map);

    // var ik = new mapboxgl.Marker()
    //     .setLngLat([77.27252433876667, 42.37472733142336])
    //     .setPopup(new mapboxgl.Popup().setHTML("<h1>Иссык-Куль</h1>"))
    //     .addTo(map);

    var main_address = [{
        'id': 1,
        'title': 'Министерство сельского хозяйства, пищевой промышленности и мелиорации Кыргызской Республики',
        'description': "Ул.Киевская 96а",
        'camera': {
            center: [74.60351506475995, 42.874049104620184],
            zoom: 18,
            pitch: 50,
            bearing: 160
        }
    }];

    var locations = [{
            'id': 1,
            'title': 'Бишкек',
            'description': "столица Киргизии, город республиканского значения, центр Чуйской области, в состав которой не входит. Крупнейший по численности населения город Киргизии — 1 053 900 чел. (2020)[2]. Первые русские поселенцы поселились на месте разрушенной крепости Кокандского ханства в 1868 году[5]. Город расположен на севере Киргизии в Чуйской долине на высоте 700—900 м над уровнем моря, в 40 км севернее Киргизского хребта у предгорий Тянь-Шаня. В 25 км от границы с Казахстаном. Бишкек соединён с Туркестано-Сибирской железной дорогой. Территория города составляет 127 км²[6] или 160 км²[1].",
            'camera': {
                center: [74.56714000979905, 42.87584732690511],
                zoom: 7,
                pitch: 50,
                bearing: 10
            }
        }, {
            'id': 2,
            'title': 'Талас',
            'description': "Талас (до 1944 года — Дмитриевка) — город областного значения в Киргизии, административный центр Таласской области и района. Город был основан в 1877 году русскими переселенцами в центральной части Таласской долины на левом берегу реки Талас, на месте древнего поселения времён Восточно-тюркского каганата, на высоте 1200 метров над уровнем моря. Ранее назывался Дмитриевка.В 1944 году был присвоен статус города .29 октября 1958 года утратил статус города областного подчинения[3].В город Талас 2 февраля 1987 года включено село Джаны - Чек из сельсовета Сорок лет Октября Таласского района[4].",
            'camera': {
                center: [72.22198178579627, 42.55788484633985],
                zoom: 9,
                pitch: 70,
                bearing: 300
            }
        }, {
            'id': 3,
            'title': 'Джалал-Абад',
            'description': "Джала́л-Аба́д[3] (кирг. Жалал-Абад) — третий по величине город в Киргизии, административный центр Джалал-Абадской области. Официальный сайт города http://jalabad.com.Население — более 113 900 человек[1]. Расположен в Ферганской долине. Недалеко от города протекает река Кугарт, правый приток реки Кара-Дарья.",
            'camera': {
                center: [72.98071823329533, 40.93441319677905],
                zoom: 11,
                pitch: 90,
                bearing: 120
            }
        }, {
            'id': 4,
            'title': 'Ош',
            'description': "Ош (кирг. Ош) — город республиканского подчинения в Киргизии, административный центр Ошской области. Ош — второй по численности населения город Киргизии после Бишкека, крупнейший город юга страны, официально именуемый «южной столицей». 18 декабря 2018 года город Ош объявлен Культурной столицей тюркского мира на 2019 год[5].",
            'camera': {
                center: [72.8160644422592, 40.513331776324634],
                zoom: 10,
                pitch: 90,
                bearing: 230
            }
        },
        {
            'id': 5,
            'title': 'Баткен',
            'description': "Батке́н (кирг. Баткен) — город в Киргизии, административный центр Баткенской области и района. Есть два варианта происхождения топонима: Название может происходит от авест. «barź-: bŗź-: barəšnu-» — «высота, вершина», от персидского «كوه»(kuh) — «гора» и «-an» – «суффикс множественного числа» — «горные высоты или горные вершины». От др. персидского «Patīkohan» — «верховье горных высот».",
            'camera': {
                center: [70.8213472324224, 40.055259930336526],
                zoom: 8,
                pitch: 20,
                bearing: 160
            }
        },
        {
            'id': 6,
            'title': 'Нарын',
            'description': "Нары́н (кирг. Нарын) — город в Киргизии, административный центр Нарынской области и Нарынского района.Население — 38 800 человек (2017). Площадь территории города — 40,5 км².",
            'camera': {
                center: [75.98404082744595, 41.426978414966136],
                zoom: 14,
                pitch: 150,
                bearing: 450
            }
        },
        {
            'id': 7,
            'title': 'Иссык-Куль',
            'description': "Иссы́к-Ку́ль (кирг. Ысык-Көл — «горячее озеро») — самое большое озеро в Киргизии, бессточное, входит в 30 крупнейших по площади озёр мира и на седьмом месте в списке самых глубоких озёр. Расположено в северо-восточной части республики, между хребтами Северного Тянь-Шаня: Кюнгёй-Ала-Тоо и Терскей Ала-Тоо на высоте 1608 м над уровнем моря[1].",
            'camera': {
                center: [77.27252433876667, 42.37472733142336],
                zoom: 12,
                pitch: 150,
                bearing: 500
            }
        },
        {
            'id': 8,
            'title': '',
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
        title.textContent = locations[index].title;
        description.textContent = locations[index].description;
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
            }, 6000); // After callback, show the location for N seconds.
            if (index === 7) {
                clearTimeout(myvar);
            }
        });
    }


    $("#guide").click(() => {
        playback(0);
    });

    $("#address").click(() => {
        map.flyTo(main_address[0].camera);
        title.textContent = main_address[0].title;
        description.textContent = main_address[0].description;
        map.once('moveend', function() {
            $('div.cover__guide').find('.cover__guide-info')
                .addClass('cover__guide-info_active');
            rotateCamera(0);
        })
    });
    $("#check").click(() => {
        var chui;
        var naryn;
        if ($('#naryn').prop('checked') == true) {
            Object.entries(naryn).forEach(([key, value]) => {
                naryn = document.createElement('div');
                naryn.id = key;
                new mapboxgl.Marker(naryn)
                    .setLngLat(value)
                    // .setPopup(popup)
                    .addTo(map);
                console.log("Добавлен чуй");
            });
        } else if ($('#naryn').prop('checked') == false) {
            alert("false");
            Object.entries(naryn).forEach(([key, value]) => {
                var elem = key
                $('#' + elem).remove();
            });
        }
        if ($('#chui').prop('checked') == true) {
            Object.entries(chui).forEach(([key, value]) => {
                chui = document.createElement('div');
                chui.id = key;
                new mapboxgl.Marker(chui)
                    .setLngLat(value)
                    // .setPopup(popup)
                    .addTo(map);
                console.log("Добавлен чуй");
            });
        } else if ($('#chui').prop('checked') == false) {
            alert("false");
            Object.entries(chui).forEach(([key, value]) => {
                var elem = key
                $('#' + elem).remove();
            });
        }
    });

    // map.on('load', function() {
    //     // Insert the layer beneath any symbol layer.
    //     var layers = map.getStyle().layers;

    //     map.addLayer({
    //         'id': '3d-buildings',
    //         'source': 'composite',
    //         'source-layer': 'building',
    //         'filter': ['==', 'extrude', 'true'],
    //         'type': 'fill-extrusion',
    //         'minzoom': 15,
    //         'paint': {
    //             'fill-extrusion-color': '#27ae60',

    //             // use an 'interpolate' expression to add a smooth transition effect to the
    //             // buildings as the user zooms in
    //             'fill-extrusion-height': [
    //                 'interpolate', ['linear'],
    //                 ['zoom'],
    //                 15,
    //                 0,
    //                 15.05, ['get', 'height']
    //             ],
    //             'fill-extrusion-base': [
    //                 'interpolate', ['linear'],
    //                 ['zoom'],
    //                 15,
    //                 0,
    //                 15.05, ['get', 'min_height']
    //             ],
    //             'fill-extrusion-opacity': .7
    //         }
    //     }, );
    // });

});