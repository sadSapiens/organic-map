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
        maxZoom: 25,
        minZoom: 6,
        zoom: 6,
        attributionControl: false,
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([72.22198178579627, 42.55788484633985])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Талас</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([75.98404082744595, 41.426978414966136])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Нарын</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([70.8213472324224, 40.055259930336526])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Баткен</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([74.56714000979905, 42.87584732690511])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Бишкек</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([72.8160644422592, 40.513331776324634])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Ош</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([72.98071823329533, 40.93441319677905])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Джалал-Абад</h1>"))
        .addTo(map);

    marker = new mapboxgl.Marker()
        .setLngLat([77.27252433876667, 42.37472733142336])
        .setPopup(new mapboxgl.Popup().setHTML("<h1>Иссык-Куль</h1>"))
        .addTo(map);

    var main_address = [{
        'id': 1,
        'title': 'Министерство сельского хозяйства, пищевой промышленности и мелиорации Кыргызской Республики',
        'description': "Ул.Киевская 96а",
        'camera': {
            center: [74.60351506475995, 42.874049104620184],
            zoom: 18,
            pitch: 45,
            bearing: 40
        }
    }];

    var locations = [{
            'id': 1,
            'title': 'Бишкек',
            'description': "столица Киргизии, город республиканского значения, центр Чуйской области, в состав которой не входит. Крупнейший по численности населения город Киргизии — 1 053 900 чел. (2020)[2]. Первые русские поселенцы поселились на месте разрушенной крепости Кокандского ханства в 1868 году[5]. Город расположен на севере Киргизии в Чуйской долине на высоте 700—900 м над уровнем моря, в 40 км севернее Киргизского хребта у предгорий Тянь-Шаня. В 25 км от границы с Казахстаном. Бишкек соединён с Туркестано-Сибирской железной дорогой. Территория города составляет 127 км²[6] или 160 км²[1].",
            'camera': {
                center: [74.56714000979905, 42.87584732690511],
                zoom: 10,
                pitch: 100
            }
        }, {
            'id': 2,
            'title': 'Талас',
            'description': "Талас (до 1944 года — Дмитриевка) — город областного значения в Киргизии, административный центр Таласской области и района. Город был основан в 1877 году русскими переселенцами в центральной части Таласской долины на левом берегу реки Талас, на месте древнего поселения времён Восточно-тюркского каганата, на высоте 1200 метров над уровнем моря. Ранее назывался Дмитриевка.В 1944 году был присвоен статус города .29 октября 1958 года утратил статус города областного подчинения[3].В город Талас 2 февраля 1987 года включено село Джаны - Чек из сельсовета Сорок лет Октября Таласского района[4].",
            'camera': {
                center: [72.22198178579627, 42.55788484633985],
                zoom: 12,
                pitch: 50,
                bearing: 40
            }
        }, {
            'id': 3,
            'title': 'Джалал-Абад',
            'description': "Джала́л-Аба́д[3] (кирг. Жалал-Абад) — третий по величине город в Киргизии, административный центр Джалал-Абадской области. Официальный сайт города http://jalabad.com.Население — более 113 900 человек[1]. Расположен в Ферганской долине. Недалеко от города протекает река Кугарт, правый приток реки Кара-Дарья.",
            'camera': {
                center: [72.98071823329533, 40.93441319677905],
                zoom: 12,
                pitch: 50,
                bearing: -40
            }
        }, {
            'id': 4,
            'title': 'Ош',
            'description': "Ош (кирг. Ош) — город республиканского подчинения в Киргизии, административный центр Ошской области. Ош — второй по численности населения город Киргизии после Бишкека, крупнейший город юга страны, официально именуемый «южной столицей». 18 декабря 2018 года город Ош объявлен Культурной столицей тюркского мира на 2019 год[5].",
            'camera': {
                center: [72.8160644422592, 40.513331776324634],
                zoom: 12,
                pitch: 50,
                bearing: 40
            }
        },
        {
            'id': 5,
            'title': 'Баткен',
            'description': "Батке́н (кирг. Баткен) — город в Киргизии, административный центр Баткенской области и района. Есть два варианта происхождения топонима: Название может происходит от авест. «barź-: bŗź-: barəšnu-» — «высота, вершина», от персидского «كوه»(kuh) — «гора» и «-an» – «суффикс множественного числа» — «горные высоты или горные вершины». От др. персидского «Patīkohan» — «верховье горных высот».",
            'camera': {
                center: [70.8213472324224, 40.055259930336526],
                zoom: 12,
                pitch: 50,
                bearing: 100
            }
        },
        {
            'id': 6,
            'title': 'Нарын',
            'description': "Нары́н (кирг. Нарын) — город в Киргизии, административный центр Нарынской области и Нарынского района.Население — 38 800 человек (2017). Площадь территории города — 40,5 км².",
            'camera': {
                center: [75.98404082744595, 41.426978414966136],
                zoom: 12,
                pitch: 50,
                bearing: -100
            }
        },
        {
            'id': 7,
            'title': 'Иссык-Куль',
            'description': "Иссы́к-Ку́ль (кирг. Ысык-Көл — «горячее озеро») — самое большое озеро в Киргизии, бессточное, входит в 30 крупнейших по площади озёр мира и на седьмом месте в списке самых глубоких озёр. Расположено в северо-восточной части республики, между хребтами Северного Тянь-Шаня: Кюнгёй-Ала-Тоо и Терскей Ала-Тоо на высоте 1608 м над уровнем моря[1].",
            'camera': {
                center: [77.27252433876667, 42.37472733142336],
                zoom: 12,
                pitch: 50,
                bearing: 15
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
            }, 100); // After callback, show the location for N seconds.
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
    })

    map.on('load', function() {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

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