// image
const imageUrl = "/resources/project-resources/pokemon-maps/hoenn/basemap.png";

// set bounds
const imageBounds = [
    [0, 0],
    [800, 1200]
];

const imageHeight = 800;
const imageWidth = 1200;

// set up map 
const map = L.map("map", {
    crs: L.CRS.Simple
});

map.setMaxBounds(imageBounds);

L.imageOverlay(imageUrl, imageBounds).addTo(map);

map.fitBounds(imageBounds);

///// routes
const popupOptions = {
    autoPan: true,
    autoPanPadding: [20, 20],
    keepInView: true,
    maxWidth: 300
};

// Route 101
var route101_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 101 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 101 is a route in southwestern Hoenn, connecting Littleroot Town and Oldale Town.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wurmple.png" alt=""> wurmple </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zigzagoon.png" alt=""> zigzagoon </td>
                        <td> grass </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var route101_polygon = L.polygon([[[0.365 * imageHeight, 0.191666666666667 * imageWidth], [0.30875 * imageHeight, 0.191666666666667 * imageWidth], [0.30875 * imageHeight, 0.206666666666667 * imageWidth], [0.365 * imageHeight, 0.206666666666667 * imageWidth], [0.365 * imageHeight, 0.191666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route101_popup, popupOptions);

// Route 102
var route102_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 102 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 102 is a route in western Hoenn, connecting Oldale Town and Petalburg City.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wurmple.png" alt=""> wurmple </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/lotad.png" alt=""> lotad </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zigzagoon.png" alt=""> zigzagoon </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/ralts.png" alt=""> ralts </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/seedot.png" alt=""> seedot </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> surf, old rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>     
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/corphish.png" alt=""> corphish </td>
                        <td> good rod, super rod </td>
                    </tr>               
                </table>
            </div>

    </div>
`);

var route102_polygon = L.polygon([[[0.3975 * imageHeight, 0.138333333333333 * imageWidth], [0.36375 * imageHeight, 0.138333333333333 * imageWidth], [0.36375 * imageHeight, 0.190833333333333 * imageWidth], [0.3975 * imageHeight, 0.190833333333333 * imageWidth], [0.3975 * imageHeight, 0.138333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route102_popup, popupOptions);

// Route 103 - 1
var route103_1_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 103 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 103 is a route in western Hoenn, connecting Route 110 and Oldale Town.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zigzagoon.png" alt=""> zigzagoon </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass </td>
                    </tr>             
                </table>
            </div>

    </div>
`);

var route103_1_polygon = L.polygon([[[0.46625 * imageHeight, 0.194166666666667 * imageWidth], [0.39625 * imageHeight, 0.194166666666667 * imageWidth], [0.39625 * imageHeight, 0.215 * imageWidth], [0.46625 * imageHeight, 0.215 * imageWidth], [0.46625 * imageHeight, 0.194166666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route103_1_popup, popupOptions);

// Route 103 - 2
var route103_2_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 103 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 103 is a route in western Hoenn, connecting Route 110 and Oldale Town.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>     
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>               
                </table>
            </div>

    </div>
`);

var route103_2_polygon = L.polygon([[[0.46625 * imageHeight, 0.215 * imageWidth], [0.44625 * imageHeight, 0.215 * imageWidth], [0.44625 * imageHeight, 0.2825 * imageWidth], [0.46625 * imageHeight, 0.2825 * imageWidth], [0.46625 * imageHeight, 0.215 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route103_2_popup, popupOptions);

// Route 104 - 1
var route104_1_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 104 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 104 is a route in west Hoenn, connecting Petalburg City, Rustboro City, and Route 105. The route is divided into two halves by Petalburg Woods.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wurmple.png" alt=""> wurmple </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/taillow.png" alt=""> taillow </td>
                        <td> grass </td>
                    </tr>     
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod, super rod </td>
                    </tr>        
                </table>
            </div>

    </div>
`);

var route104_1_polygon = L.polygon([[[0.4 * imageHeight, 0.0408333333333333 * imageWidth], [0.33625 * imageHeight, 0.0408333333333333 * imageWidth], [0.33625 * imageHeight, 0.119166666666667 * imageWidth], [0.4 * imageHeight, 0.119166666666667 * imageWidth], [0.4 * imageHeight, 0.0408333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route104_1_popup, popupOptions);

// Route 104 - 2
var route104_2_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 104 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 104 is a route in west Hoenn, connecting Petalburg City, Rustboro City, and Route 105. The route is divided into two halves by Petalburg Woods.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wurmple.png" alt=""> wurmple </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/taillow.png" alt=""> taillow </td>
                        <td> grass </td>
                    </tr>     
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod, super rod </td>
                    </tr>        
                </table>
            </div>

    </div>
`);

var route104_2_polygon = L.polygon([[[0.525 * imageHeight, 0.0625 * imageWidth], [0.42875 * imageHeight, 0.0625 * imageWidth], [0.42875 * imageHeight, 0.105 * imageWidth], [0.525 * imageHeight, 0.105 * imageWidth], [0.525 * imageHeight, 0.0625 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route104_2_popup, popupOptions);

// Route 105
var route105_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 105 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 105 is a water route in southwestern Hoenn, connecting Route 104 and Route 106. It is home to the Island Cave, the home of Regice, one of the original three legendary giants.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);

var route105_polygon = L.polygon([[[0.3325 * imageHeight, 0.04 * imageWidth], [0.20375 * imageHeight, 0.04 * imageWidth], [0.20375 * imageHeight, 0.085 * imageWidth], [0.3325 * imageHeight, 0.085 * imageWidth], [0.3325 * imageHeight, 0.04 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route105_popup, popupOptions);

// Route 106 - 1
var route106_1_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 106 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 106 is a water route in southern Hoenn, connecting Route 105 and Dewford Town on Dewford Island. Granite Cave is located at the center of the route.   
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);

var route106_1_polygon = L.polygon([[[0.20125 * imageHeight, 0.0308333333333333 * imageWidth], [0.15625 * imageHeight, 0.0308333333333333 * imageWidth], [0.15625 * imageHeight, 0.15 * imageWidth], [0.20125 * imageHeight, 0.15 * imageWidth], [0.20125 * imageHeight, 0.0308333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route106_1_popup, popupOptions);

// Route 106 - 2
var route106_2_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 106 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 106 is a water route in southern Hoenn, connecting Route 105 and Dewford Town on Dewford Island. Granite Cave is located at the center of the route.   
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);

var route106_2_polygon = L.polygon([[[0.1575 * imageHeight, 0.124166666666667 * imageWidth], [0.105 * imageHeight, 0.124166666666667 * imageWidth], [0.105 * imageHeight, 0.1425 * imageWidth], [0.1575 * imageHeight, 0.1425 * imageWidth], [0.1575 * imageHeight, 0.124166666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route106_2_popup, popupOptions);

// Route 107
var route107_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 107 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 107 is a water route in southern Hoenn, connecting Dewford Town and Route 108.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);

var route107_polygon = L.polygon([[[0.125 * imageHeight, 0.145833333333333 * imageWidth], [0.08625 * imageHeight, 0.145833333333333 * imageWidth], [0.08625 * imageHeight, 0.221666666666667 * imageWidth], [0.125 * imageHeight, 0.221666666666667 * imageWidth], [0.125 * imageHeight, 0.145833333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route107_popup, popupOptions);

// Route 108
var route108_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 108 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 108 is a water route in southern Hoenn, connecting Route 107 and Route 109. The Abandoned Ship is located at the center of the route.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>             
                </table>
            </div>

    </div>
`);

var route108_polygon = L.polygon([[[0.135 * imageHeight, 0.225 * imageWidth], [0.0925 * imageHeight, 0.225 * imageWidth], [0.0925 * imageHeight, 0.281666666666667 * imageWidth], [0.135 * imageHeight, 0.281666666666667 * imageWidth], [0.135 * imageHeight, 0.225 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route108_popup, popupOptions);

// Route 109
var route109_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 109 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 109 is a partial water route in southern Hoenn, connecting Route 108 and Slateport City. Mr. Briney will ferry the player here only after the player delivers the Letter to Steven in Granite Cave.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);

var route109_polygon = L.polygon([[[0.26875 * imageHeight, 0.284166666666667 * imageWidth], [0.105 * imageHeight, 0.284166666666667 * imageWidth], [0.105 * imageHeight, 0.3475 * imageWidth], [0.26875 * imageHeight, 0.3475 * imageWidth], [0.26875 * imageHeight, 0.284166666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route109_popup, popupOptions);

// Route 110
var route110_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 110 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 110 is a route in central Hoenn, connecting Slateport City, Mauville City and Route 103. The route is home to the Seaside Cycling Road, Trick House, and New Mauville.   
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/electrike.png" alt=""> electrike </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/gulpin.png" alt=""> gulpin </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/minun.png" alt=""> minun </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/plusle.png" alt=""> plusle </td>
                        <td> grass </td>
                    </tr>        
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>       
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>       
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>       
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route110_polygon = L.polygon([[[0.59125 * imageHeight, 0.285 * imageWidth], [0.355 * imageHeight, 0.285 * imageWidth], [0.355 * imageHeight, 0.339166666666667 * imageWidth], [0.59125 * imageHeight, 0.339166666666667 * imageWidth], [0.59125 * imageHeight, 0.285 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route110_popup, popupOptions);

// Route 111
var route111_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 111 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 111 is a route in central Hoenn, connecting Mauville City, Route 112, and Route 113. The Desert Ruins, Mirage Tower, Trainer Hill and the home of the Winstrate family are all located on this route.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sandshrew.png" alt=""> sandshrew </td>
                        <td> sand </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/trapinch.png" alt=""> trapinch </td>
                        <td> sand </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/baltoy.png" alt=""> baltoy </td>
                        <td> sand </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/cacnea.png" alt=""> cacnea </td>
                        <td> sand </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/geodude.png" alt=""> geodude </td>
                        <td> rock smash </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/barboach.png" alt=""> barboach </td>
                        <td> good rod, super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route111_polygon = L.polygon([[[0.92 * imageHeight, 0.311666666666667 * imageWidth], [0.63875 * imageHeight, 0.311666666666667 * imageWidth], [0.63875 * imageHeight, 0.3675 * imageWidth], [0.92 * imageHeight, 0.3675 * imageWidth], [0.92 * imageHeight, 0.311666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route111_popup, popupOptions);

// Route 112 - 1
var route112_1_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 112 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 112 is a route in central Hoenn, connecting Route 111, Lavaridge Town, Mt. Chimney, and the Jagged Pass. The route is divided into two segments by Mt. Chimney. The Fiery Path is located on the route, connecting the two segments.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/numel.png" alt=""> numel </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var route112_1_polygon = L.polygon([[[0.875 * imageHeight, 0.288333333333333 * imageWidth], [0.7775 * imageHeight, 0.288333333333333 * imageWidth], [0.7775 * imageHeight, 0.31 * imageWidth], [0.875 * imageHeight, 0.31 * imageWidth], [0.875 * imageHeight, 0.288333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route112_1_popup, popupOptions);

// Route 112 - 2
var route112_2_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 112 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 112 is a route in central Hoenn, connecting Route 111, Lavaridge Town, Mt. Chimney, and the Jagged Pass. The route is divided into two segments by Mt. Chimney. The Fiery Path is located on the route, connecting the two segments.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/numel.png" alt=""> numel </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var route112_2_polygon = L.polygon([[[0.805 * imageHeight, 0.2525 * imageWidth], [0.7675 * imageHeight, 0.2525 * imageWidth], [0.7675 * imageHeight, 0.288333333333333 * imageWidth], [0.805 * imageHeight, 0.288333333333333 * imageWidth], [0.805 * imageHeight, 0.2525 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route112_2_popup, popupOptions);

// Route 113
var route113_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 113 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 113 is a route in northern Hoenn, connecting Route 111 and Fallarbor Town.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/spinda.png" alt=""> spinda </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/slugma.png" alt=""> slugma </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/skarmory.png" alt=""> skarmory </td>
                        <td> grass </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var route113_polygon = L.polygon([[[0.9225 * imageHeight, 0.194166666666667 * imageWidth], [0.89875 * imageHeight, 0.194166666666667 * imageWidth], [0.89875 * imageHeight, 0.310833333333333 * imageWidth], [0.9225 * imageHeight, 0.310833333333333 * imageWidth], [0.9225 * imageHeight, 0.194166666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route113_popup, popupOptions);

// Route 114
var route114_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 114 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 114 is a route in northwestern Hoenn, connecting Fallarbor Town and Meteor Falls.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/swablu.png" alt=""> swablu </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/lotad.png" alt=""> lotad </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/lombre.png" alt=""> lombre </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/seviper.png" alt=""> seviper </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/nuzleaf.png" alt=""> nuzleaf </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/geodude.png" alt=""> geodude </td>
                        <td> rock smash </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old road, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/barboach.png" alt=""> barboach </td>
                        <td> good rod, super rod </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var route114_polygon = L.polygon([[[0.92875 * imageHeight, 0.121666666666667 * imageWidth], [0.85625 * imageHeight, 0.121666666666667 * imageWidth], [0.85625 * imageHeight, 0.171666666666667 * imageWidth], [0.92875 * imageHeight, 0.171666666666667 * imageWidth], [0.92875 * imageHeight, 0.121666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route114_popup, popupOptions);

// Route 115
var route115_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 115 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 115 is a route in western Hoenn, connecting Rustboro City to Meteor Falls.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/swablu.png" alt=""> swablu </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/taillow.png" alt=""> taillow </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/swellow.png" alt=""> swellow </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/jigglypuff.png" alt=""> jigglypuff </td>
                        <td> grass </td>
                    </tr>     
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> super rod </td>
                    </tr>           
                </table>
            </div>

    </div>
`);

var route115_polygon = L.polygon([[[0.6975 * imageHeight, 0.0675 * imageWidth], [0.59375 * imageHeight, 0.0675 * imageWidth], [0.59375 * imageHeight, 0.11 * imageWidth], [0.6975 * imageHeight, 0.11 * imageWidth], [0.6975 * imageHeight, 0.0675 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route115_popup, popupOptions);

// Route 116
var route116_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 116 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 116 is a route in western Hoenn, connecting Rustboro City and Rusturf Tunnel.   
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/whismur.png" alt=""> whismur </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/nincada.png" alt=""> nincada </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/abra.png" alt=""> abra </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/taillow.png" alt=""> taillow </td>
                        <td> grass </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/skitty.png" alt=""> skitty </td>
                        <td> grass </td>
                    </tr>        
                </table>
            </div>

    </div>
`);

var route116_polygon = L.polygon([[[0.58625 * imageHeight, 0.0775 * imageWidth], [0.56375 * imageHeight, 0.0775 * imageWidth], [0.56375 * imageHeight, 0.151666666666667 * imageWidth], [0.58625 * imageHeight, 0.151666666666667 * imageWidth], [0.58625 * imageHeight, 0.0775 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route116_popup, popupOptions);

// Route 117
var route117_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 117 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 117 is a route in central Hoenn, connecting Verdanturf Town and Mauville City.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/illumise.png" alt=""> illumise </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/volbeat.png" alt=""> volbeat </td>
                        <td> grass </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/seedot.png" alt=""> seedot </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/corphish.png" alt=""> corphish </td>
                        <td> good rod, super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route117_polygon = L.polygon([[[0.64125 * imageHeight, 0.218333333333333 * imageWidth], [0.60125 * imageHeight, 0.218333333333333 * imageWidth], [0.60125 * imageHeight, 0.300833333333333 * imageWidth], [0.64125 * imageHeight, 0.300833333333333 * imageWidth], [0.64125 * imageHeight, 0.218333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route117_popup, popupOptions);

// Route 118
var route118_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 118 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 118 is a route in central Hoenn, connecting Mauville City, Route 119, and Route 123.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zigzagoon.png" alt=""> zigzagoon </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/electrike.png" alt=""> electrike </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/linoone.png" alt=""> linoone </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/manectric.png" alt=""> manectric </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/kecleon.png" alt=""> kecleon </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/carvanha.png" alt=""> carvanha </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route118_polygon = L.polygon([[[0.6275 * imageHeight, 0.328333333333333 * imageWidth], [0.59375 * imageHeight, 0.328333333333333 * imageWidth], [0.59375 * imageHeight, 0.456666666666667 * imageWidth], [0.6275 * imageHeight, 0.456666666666667 * imageWidth], [0.6275 * imageHeight, 0.328333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route118_popup, popupOptions);

// Route 119
var route119_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 119 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 119 is a tropical route in central Hoenn, connecting Route 118 and Fortree City. The route is home to the Weather Institute.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zigzagoon.png" alt=""> zigzagoon </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/linoone.png" alt=""> linoone </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tropius.png" alt=""> tropius </td>
                        <td> grass </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/kecleon.png" alt=""> kecleon </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/carvanha.png" alt=""> carvanha </td>
                        <td> good rod, super rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/feebas.png" alt=""> feebas </td>
                        <td> any rod - special encounter </td>
                    </tr>     
                </table>
            </div>

    </div>
`);

var route119_polygon = L.polygon([[[0.8925 * imageHeight, 0.3775 * imageWidth], [0.6375 * imageHeight, 0.3775 * imageWidth], [0.6375 * imageHeight, 0.444166666666667 * imageWidth], [0.8925 * imageHeight, 0.444166666666667 * imageWidth], [0.8925 * imageHeight, 0.3775 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route119_popup, popupOptions);

// Route 120
var route120_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 120 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 120 is a route in central Hoenn, connecting Fortree City and Route 121. The route is also home to a pair of caves, the Ancient Tomb and the Scorched Slab.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/mightyena.png" alt=""> mightyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> grass, surf </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/absol.png" alt=""> absol </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/kecleon.png" alt=""> kecleon </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/seedot.png" alt=""> seedot </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/barboach.png" alt=""> barboach </td>
                        <td> good rod, super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route120_polygon = L.polygon([[[0.89375 * imageHeight, 0.466666666666667 * imageWidth], [0.75375 * imageHeight, 0.466666666666667 * imageWidth], [0.75375 * imageHeight, 0.558333333333333 * imageWidth], [0.89375 * imageHeight, 0.558333333333333 * imageWidth], [0.89375 * imageHeight, 0.466666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route120_popup, popupOptions);

// Route 121
var route121_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 121 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 121 is a route in central Hoenn, connecting Lilycove City, Route 120, Route 122, and Hoenn's Safari Zone.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/shuppet.png" alt=""> shuppet </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/mightyena.png" alt=""> mightyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/gloom.png" alt=""> gloom </td>
                        <td> grass, surf </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/kecleon.png" alt=""> kecleon </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route121_polygon = L.polygon([[[0.795 * imageHeight, 0.561666666666667 * imageWidth], [0.755 * imageHeight, 0.561666666666667 * imageWidth], [0.755 * imageHeight, 0.665833333333333 * imageWidth], [0.795 * imageHeight, 0.665833333333333 * imageWidth], [0.795 * imageHeight, 0.561666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route121_popup, popupOptions);

// Route 122
var route122_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 122 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 122 is a water route in central Hoenn, connecting Route 121 and Route 123. Mt. Pyre lies on an island in the center of the route.    
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>         
                </table>
            </div>

    </div>
`);


var route122_polygon = L.polygon([[[0.735 * imageHeight, 0.5225 * imageWidth], [0.64875 * imageHeight, 0.5225 * imageWidth], [0.64875 * imageHeight, 0.660833333333333 * imageWidth], [0.735 * imageHeight, 0.660833333333333 * imageWidth], [0.735 * imageHeight, 0.5225 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route122_popup, popupOptions);

// Route 123
var route123_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 123 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 123 is a route in central Hoenn, connecting Route 122 and Route 118.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/shuppet.png" alt=""> shuppet </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/mightyena.png" alt=""> mightyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/oddish.png" alt=""> oddish </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/gloom.png" alt=""> gloom </td>
                        <td> grass, surf </td>
                    </tr>    
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> grass, surf </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/kecleon.png" alt=""> kecleon </td>
                        <td> grass </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr> 
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>       
                </table>
            </div>

    </div>
`);

var route123_polygon = L.polygon([[[0.6325 * imageHeight, 0.46 * imageWidth], [0.59125 * imageHeight, 0.46 * imageWidth], [0.59125 * imageHeight, 0.624166666666667 * imageWidth], [0.6325 * imageHeight, 0.624166666666667 * imageWidth], [0.6325 * imageHeight, 0.46 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route123_popup, popupOptions);

// Route 124
var route124_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 124 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 124 is a water route in northeast Hoenn, connecting Lilycove City, Mossdeep City and Route 126. This route is inaccessible until the player defeats Team Magma/Team Aqua in Lilycove City.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/clamperl.png" alt=""> clamperl </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/chinchou.png" alt=""> chinchou </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/relicanth.png" alt=""> relicanth </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route124_polygon = L.polygon([[[0.79 * imageHeight, 0.726666666666667 * imageWidth], [0.6725 * imageHeight, 0.726666666666667 * imageWidth], [0.6725 * imageHeight, 0.830833333333333 * imageWidth], [0.79 * imageHeight, 0.830833333333333 * imageWidth], [0.79 * imageHeight, 0.726666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route124_popup, popupOptions);

// Route 125
var route125_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 125 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 125 is a water route in northeast Hoenn, connecting Mossdeep City to the Shoal Cave.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route125_polygon = L.polygon([[[0.8725 * imageHeight, 0.799166666666667 * imageWidth], [0.7975 * imageHeight, 0.799166666666667 * imageWidth], [0.7975 * imageHeight, 0.923333333333333 * imageWidth], [0.8725 * imageHeight, 0.923333333333333 * imageWidth], [0.8725 * imageHeight, 0.799166666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route125_popup, popupOptions);

// Route 126
var route126_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 126 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 126 is a water route in eastern Hoenn, connecting Route 124 and Route 127. The route encircles Sootopolis City, a city built in the interior of an inactive volcanic island.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/clamperl.png" alt=""> clamperl </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/chinchou.png" alt=""> chinchou </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/relicanth.png" alt=""> relicanth </td>
                        <td> dive </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route126_polygon = L.polygon([[[0.66625 * imageHeight, 0.713333333333333 * imageWidth], [0.4875 * imageHeight, 0.713333333333333 * imageWidth], [0.4875 * imageHeight, 0.8175 * imageWidth], [0.66625 * imageHeight, 0.8175 * imageWidth], [0.66625 * imageHeight, 0.713333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route126_popup, popupOptions);

// Route 127
var route127_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 127 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 127 is a water route in eastern Hoenn, connecting Mossdeep City, Route 126, and Route 128.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route127_polygon = L.polygon([[[0.67 * imageHeight, 0.821666666666667 * imageWidth], [0.47875 * imageHeight, 0.821666666666667 * imageWidth], [0.47875 * imageHeight, 0.9125 * imageWidth], [0.67 * imageHeight, 0.9125 * imageWidth], [0.67 * imageHeight, 0.821666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route127_popup, popupOptions);

// Route 128
var route128_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 128 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 128 is a water route in southeast Hoenn, connecting Route 127, Route 129, and Ever Grande City. The Seafloor Cavern is located underwater near the center of the route.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/luvdisc.png" alt=""> luvdisc </td>
                        <td> super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/corsola.png" alt=""> corsola </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route128_polygon = L.polygon([[[0.47375 * imageHeight, 0.811666666666667 * imageWidth], [0.41125 * imageHeight, 0.811666666666667 * imageWidth], [0.41125 * imageHeight, 0.954166666666667 * imageWidth], [0.47375 * imageHeight, 0.954166666666667 * imageWidth], [0.47375 * imageHeight, 0.811666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route128_popup, popupOptions);

// Route 129
var route129_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 129 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 129 is a water route in southeast Hoenn, connecting Route 128 and Route 130.  
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailord.png" alt=""> wailord </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route129_polygon = L.polygon([[[0.40375 * imageHeight, 0.785 * imageWidth], [0.2975 * imageHeight, 0.785 * imageWidth], [0.2975 * imageHeight, 0.8875 * imageWidth], [0.40375 * imageHeight, 0.8875 * imageWidth], [0.40375 * imageHeight, 0.785 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route129_popup, popupOptions);

// Route 130
var route130_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 130 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 130 is a water route in southeast Hoenn, connecting Route 129 and Route 131.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route130_polygon = L.polygon([[[0.37875 * imageHeight, 0.706666666666667 * imageWidth], [0.30625 * imageHeight, 0.706666666666667 * imageWidth], [0.30625 * imageHeight, 0.7825 * imageWidth], [0.37875 * imageHeight, 0.7825 * imageWidth], [0.37875 * imageHeight, 0.706666666666667 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route130_popup, popupOptions);

// Route 131
var route131_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 131 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 131 is a water route in southern Hoenn, connecting Route 130 and Pacifidlog Town.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route131_polygon = L.polygon([[[0.375 * imageHeight, 0.645833333333333 * imageWidth], [0.31125 * imageHeight, 0.645833333333333 * imageWidth], [0.31125 * imageHeight, 0.705 * imageWidth], [0.375 * imageHeight, 0.705 * imageWidth], [0.375 * imageHeight, 0.645833333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route131_popup, popupOptions);

// Route 132
var route132_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 132 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 132 is a water route located in south-central Hoenn, connecting Pacifidlog Town and Route 133. The route is dominated for most of its length by a rapid current that prohibits any controlled movement while Surfing, thus making it a westbound route only.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/horsea.png" alt=""> horsea </td>
                        <td> super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route132_polygon = L.polygon([[[0.39 * imageHeight, 0.545 * imageWidth], [0.32 * imageHeight, 0.545 * imageWidth], [0.32 * imageHeight, 0.6225 * imageWidth], [0.39 * imageHeight, 0.6225 * imageWidth], [0.39 * imageHeight, 0.545 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route132_popup, popupOptions);

// Route 133
var route133_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 133 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 133 is a water route located in south-central Hoenn, connecting Route 132 and Route 134. The route is dominated for most of its length by a rapid current that prohibits any controlled movement while Surfing, thus making it a westbound route only.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/horsea.png" alt=""> horsea </td>
                        <td> super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route133_polygon = L.polygon([[[0.39 * imageHeight, 0.458333333333333 * imageWidth], [0.32 * imageHeight, 0.458333333333333 * imageWidth], [0.32 * imageHeight, 0.543333333333333 * imageWidth], [0.39 * imageHeight, 0.543333333333333 * imageWidth], [0.39 * imageHeight, 0.458333333333333 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route133_popup, popupOptions);

// Route 134
var route134_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> Route 134 </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Route 134 is a water route in south-central Hoenn, connecting Route 133 and Slateport City. The route is dominated for most of its length by a rapid current that prohibits any controlled movement while Surfing, thus making it a westbound route only. The Sealed Chamber is located underwater near the eastern end of the route. It is the final numbered route in Hoenn.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/horsea.png" alt=""> horsea </td>
                        <td> super rod </td>
                    </tr>   
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var route134_polygon = L.polygon([[[0.39 * imageHeight, 0.3475 * imageWidth], [0.32 * imageHeight, 0.3475 * imageWidth], [0.32 * imageHeight, 0.456666666666667 * imageWidth], [0.39 * imageHeight, 0.456666666666667 * imageWidth], [0.39 * imageHeight, 0.3475 * imageWidth]]],
    {
        color: 'red'
    }
).addTo(map).bindPopup(route134_popup, popupOptions);

// Littleroot Town
var littlerootTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> littleroot town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Littleroot Town is located in southwestern Hoenn. It is where players of the Hoenn-based games start their Pokémon journeys. Hoenn's region-exclusive professor, Professor Birch, has a laboratory in the town that he uses for research on Pokémon.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/treecko.png" alt=""> treecko </td>
                        <td> gift </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/torchic.png" alt=""> torchic </td>
                        <td> gift </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/mudkip.png" alt=""> mudkip </td>
                        <td> gift </td>
                    </tr>  
                </table>
            </div>

    </div>
`);

var littlerootTown_marker = L.circle([0.292020874* imageHeight, 0.198610433* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(littlerootTown_popup, popupOptions)

// Oldale Town
var oldaleTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> oldale town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Oldale Town is located in southwestern Hoenn. There is little of interest in Oldale Town in the Pokémon games; the simple town serves as a checkpoint for Pokémon Trainers traveling between Littleroot Town and Petalburg City.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var oldaleTown_marker = L.circle([0.376835938* imageHeight, 0.201223958* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(oldaleTown_popup, popupOptions)

// Petalburg City
var petalburgCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> petalburg city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Petalburg City is located in southwestern Hoenn. Despite Petalburg being the first city with a Gym, the Gym is not accessible until after obtaining four Badges.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/normal.png?raw=true" alt=""> normal </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/marill.png" alt=""> marill </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> old rod, good rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/corphish.png" alt=""> corphish </td>
                        <td> good rod, super rod </td>
                    </tr>  
                </table>
            </div>

    </div>
`);

var petalburgCity_marker = L.circle([0.377264404* imageHeight, 0.128604736* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(petalburgCity_popup, popupOptions)

// Rustboro City
var rustboroCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> rustboro city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Rustboro City is a metropolis located in western Hoenn. It is the fourth-largest city in Hoenn, after Mauville City, Lilycove City and Slateport City. Rustboro City has an unusual yet unique cityscape in the Hoenn region. The buildings' architectures are designed with stones, giving it an old-town feeling.
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/rock.png?raw=true" alt=""> rock </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var rustboroCity_marker = L.circle([0.5403125* imageHeight, 0.0846875* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(rustboroCity_popup, popupOptions)

// Dewford Town
var dewfordTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> dewford town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Dewford Town is a waterfront town located on an island southwest of mainland Hoenn. The island town is home to Brawly, the Dewford Gym Leader who specializes in Fighting-type Pokémon.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/fighting.png?raw=true" alt=""> fighting </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var dewfordTown_marker = L.circle([0.094583435* imageHeight, 0.106621094* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(dewfordTown_popup, popupOptions)

// Slateport City
var slateportCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> slateport city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Slateport City is a port town on the southern coast of Hoenn. It houses the Oceanic Museum and a specialty market.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var slateportCity_marker = L.circle([0.32484375* imageHeight, 0.2996875* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(slateportCity_popup, popupOptions)

// Mauville City
var mauvilleCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> mauville city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Mauville City is located in central Hoenn and serves as the hub for travelers throughout the Hoenn region.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/electric.png?raw=true" alt=""> electric </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var mauvilleCity_marker = L.circle([0.618439941* imageHeight, 0.314962158* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(mauvilleCity_popup, popupOptions)

// Verdanturf Town
var verdanturfTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> verdanturf town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Verdanturf Town is a small, quaint town nestled between the mountains and the plains in central-western Hoenn. It is well known for its very clean air.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var verdanturfTown_marker = L.circle([0.618304443* imageHeight, 0.205619303* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(verdanturfTown_popup, popupOptions)

// Lavaridge Town
var lavaridgeTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> lavaridge town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Lavaridge Town is a small town in central western Hoenn. It is located on the southern foot of Mt. Chimney. The town is well known for its hot spring and is a popular destination for elderly citizens.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/fire.png?raw=true" alt=""> fire  </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wynaut.png" alt=""> wynaut </td>
                        <td> gift (egg) </td>
                    </tr>   
                </table>
            </div>

    </div>
`);

var lavaridgeTown_marker = L.circle([0.783569946* imageHeight, 0.239344076* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(lavaridgeTown_popup, popupOptions)

// Fallarbor Town
var fallarborTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> fallarbor town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Fallarbor Town is a small farming community in northwest Hoenn. It is extremely close to Mt. Chimney, so much that the ash from the volcano constantly falls near the town.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var fallarborTown_marker = L.circle([0.909624634* imageHeight, 0.181349284* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(fallarborTown_popup, popupOptions)

// Fortree City
var fortreeCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> fortree city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Fortree City is a city, roughly between Mauville and Lilycove, in the Hoenn region. The residents of Fortree City live in treehouses and get around by a system of rope bridges that hang in the treetops.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/flying.png?raw=true" alt=""> flying </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                There are no available encounters here.
            </div>

    </div>
`);

var fortreeCity_marker = L.circle([0.882578125* imageHeight, 0.455885417* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(fortreeCity_popup, popupOptions)

// Lilycove City
var lilycoveCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> lilycove city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Lilycove City is located in eastern Hoenn and houses a harbor and the region's largest department store.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/staryu.png" alt=""> staryu </td>
                        <td> super rod </td>
                    </tr>      
                </table>
            </div>

    </div>
`);

var lilycoveCity_marker = L.circle([0.774232788* imageHeight, 0.680493978* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(lilycoveCity_popup, popupOptions)

// Mossdeep City
var mossdeepCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> mossdeep city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Mossdeep City lies on an island along the eastern edge of the Hoenn mainland. Many divers live at Mossdeep, and it is the fourth largest city in Hoenn.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/psychic.png?raw=true" alt=""> psychic </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/beldum.png" alt=""> beldum </td>
                        <td> gift </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>      
                </table>
            </div>

    </div>
`);

var mossdeepCity_marker = L.circle([0.742547047* imageHeight, 0.870746975* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(mossdeepCity_popup, popupOptions)

// Sootopolis City
var sootopolisCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> sootopolis city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Sootopolis City is a city located to the east of the Hoenn mainland, located inside a volcanic crater. To navigate the city, people have to climb many flights of stairs and Dive under the sea. This causes many of the locals to get into good shape.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/water.png?raw=true" alt=""> water </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> magikarp </td>
                        <td> surf, old rod, good rod, super rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> tentacool </td>
                        <td> old rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> gyarados </td>
                        <td> super rod </td>
                    </tr>     
                </table>
            </div>

    </div>
`);

var sootopolisCity_marker = L.circle([0.560316181* imageHeight, 0.760366402* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(sootopolisCity_popup, popupOptions)

// Pacifidlog Town
var pacifidlogTown_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> pacifidlog town </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Pacifidlog Town is a small town built on wooden rafts and logs that float on top of a Corsola colony. The people living in Pacifidlog Town all fish and dive as part of their lifestyle.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/X_mark.svg/525px-X_mark.svg.png?20221028144536" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sharpedo.png" alt=""> sharpedo </td>
                        <td> super rod </td>
                    </tr>    
                </table>
            </div>

    </div>
`);

var pacifidlogTown_marker = L.circle([0.35453125* imageHeight, 0.63375* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(pacifidlogTown_popup, popupOptions)

// Ever Grande City
var evergrandeCity_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> ever grande city </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Ever Grande City is a city located on an island in eastern Hoenn. It is the location of the Hoenn Pokémon League.
                <table class = "popup-table">
                    <tr>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/e/e0/Pok%C3%A9mon_Center_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/6/64/Pok%C3%A9_Mart_RSE.png" alt=""> </td>
                        <td> <img class="table-img-small" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arbcom_ru_ready.svg/800px-Arbcom_ru_ready.svg.png" alt=""> </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://archives.bulbagarden.net/media/upload/8/81/Gym_RSE.png" alt=""> </td>
                        <td> <img class="table-img-smallest" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/dark.png?raw=true" alt=""> 
                             <img class="table-img-smallest" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/ghost.png?raw=true" alt="">
                             <img class="table-img-smallest" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/ice.png?raw=true" alt="">
                             <img class="table-img-smallest" src="https://github.com/msikma/pokesprite/blob/master/misc/types/gen8/dragon.png?raw=true" alt=""> </td>
                    </tr>  
                </table>
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/tentacool.png" alt=""> tentacool </td>
                        <td> surf, old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wingull.png" alt=""> wingull </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/pelipper.png" alt=""> pelipper </td>
                        <td> surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rood, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/luvdisc.png" alt=""> luvdisc </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wailmer.png" alt=""> wailmer </td>
                        <td> good rod, super rod </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/corsola.png" alt=""> corsola </td>
                        <td> super rod </td>
                    </tr>      
                </table>
            </div>

    </div>
`);

var evergrandeCity_marker = L.circle([0.613964079* imageHeight, 0.938584275* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(evergrandeCity_popup, popupOptions)

// Petalburg Woods
var petalburgWoods_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> petalburg woods </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Petalburg Woods is a forest in western Hoenn that lies between Petalburg City and Rustboro City, in the middle of Route 104.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/poochyena.png" alt=""> poochyena </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/wurmple.png" alt=""> wurmple </td>
                        <td> grass </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/shroomish.png" alt=""> shroomish </td>
                        <td> grass </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/silcoon.png" alt=""> silcoon </td>
                        <td> grass </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/cascoon.png" alt=""> cascoon </td>
                        <td> grass </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/taillow.png" alt=""> taillow </td>
                        <td> grass </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/slakoth.png" alt=""> slakoth </td>
                        <td> grass </td>
                    </tr>  
                </table>
            </div>

    </div>
`);

var petalburgWoods_marker = L.circle([0.41109375* imageHeight, 0.068333333* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(petalburgWoods_popup, popupOptions)

// Granite Cave
var graniteCave_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> granite cave </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Granite Cave is located northwest of Dewford Town, with its only entrance on Route 106.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zubat.png" alt=""> zubat </td>
                        <td> F1 <br> BF1 <br> BF2 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/makuhita.png" alt=""> makuhita </td>
                        <td> F1 <br> BF1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/abra.png" alt=""> abra </td>
                        <td> F1 <br> BF1 <br> BF2 </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/geodude.png" alt=""> geodude </td>
                        <td> F1 <br> BF2 - rock smash </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/sableye.png" alt=""> sableye </td>
                        <td> BF1 <br> BF2 </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/aron.png" alt=""> aron </td>
                        <td> BF1 <br> BF2 </td>
                    </tr>  
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/nosepass.png" alt=""> nosepass </td>
                        <td> BF2 - rock smash </td>
                    </tr>  
                </table>
            </div>

    </div>
`);

var graniteCave_marker = L.circle([0.128828125* imageHeight, 0.064427083* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(graniteCave_popup, popupOptions)

// Rusturf Tunnel
var rusturfTunnel_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> rusturf tunnel </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Rusturf Tunnel is a tunnel between Rustboro City and Verdanturf Town, hence the name.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/whismur.png" alt=""> whismur </td>
                        <td> F1 </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var rusturfTunnel_marker_1 = L.circle([0.59484375* imageHeight, 0.149791667* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(rusturfTunnel_popup, popupOptions)

var rusturfTunnel_marker_2 = L.circle([0.65765625* imageHeight, 0.204375* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(rusturfTunnel_popup, popupOptions)

// Fiery Path
var fieryPath_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> fiery path </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Fiery Path is an underground route which travels though Mt. Chimney.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/numel.png" alt=""> numel </td>
                        <td> F1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/koffing.png" alt=""> koffing </td>
                        <td> F1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/machop.png" alt=""> machop </td>
                        <td> F1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/torkoal.png" alt=""> torkoal </td>
                        <td> F1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/slugma.png" alt=""> slugma </td>
                        <td> F1 </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/grimer.png" alt=""> grimer </td>
                        <td> F1 </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var fieryPath_marker_1 = L.circle([0.816875* imageHeight, 0.271376953* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(fieryPath_popup, popupOptions)

var fieryPath_marker_2 = L.circle([0.8646875* imageHeight, 0.279033203* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(fieryPath_popup, popupOptions)

// Meteor Falls
var meteorFalls_popup = L.popup().setContent(`
        <div class="tabbed-popup">

        <h3 style="margin: 0 0 10px 0;"> meteor falls </h3>

            <div class="popup-tabs">
                <button class="popup-tab active" data-tab="1">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/key-item/journal.png?raw=true" alt="Description"> </a>    
                </button>
                <button class="popup-tab" data-tab="2">
                    <a> <img class = "popup-tab-img" src="https://github.com/msikma/pokesprite/blob/master/items/ball/poke.png?raw=true" alt="Encounters"> </a>
                </button>
            </div>

            <div class="popup-content active" data-content="1">
                Meteor Falls is a large cave west of Fallarbor Town with a waterfall inside.
            </div>

            <div class="popup-content" data-content="2">
                <table class = "popup-table">
                    <tr>
                        <th> Pokemon </th>
                        <th> Method </th>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/zubat.png" alt=""> zubat </td>
                        <td> walk, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/solrock.png" alt=""> solrock </td>
                        <td> walk, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/golbat.png" alt=""> golbat </td>
                        <td> walk, surf </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bagon.png" alt=""> bagon </td>
                        <td> walk </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/magikarp.png" alt=""> magikarp </td>
                        <td> old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/goldeen.png" alt=""> goldeen </td>
                        <td> old rod, good rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/barboach.png" alt=""> barboach </td>
                        <td> good rod, super rod </td>
                    </tr>
                    <tr>
                        <td> <img class="table-img" src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/whiscash.png" alt=""> whiscash </td>
                        <td> super rod </td>
                    </tr>
                </table>
            </div>

    </div>
`);

var meteorFalls_marker_1 = L.circle([0.70671875* imageHeight, 0.105729167* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(meteorFalls_popup, popupOptions)

var meteorFalls_marker_2 = L.circle([0.84140622* imageHeight, 0.13125* imageWidth], Math.sqrt((0.00032724923 * (imageHeight * imageWidth)) / Math.PI),
    {
    color: 'red'
    }
).addTo(map).bindPopup(meteorFalls_popup, popupOptions)

// Magma/Aqua Hideout


// Shoal Cave


// Sky Pillar


// Victory Road


// FUNCTIONALITY
map.on('click', function (e) {
    console.log(e.latlng.lat, e.latlng.lng);
});


map.on('popupopen', function (e) {
    const popup = e.popup.getElement();

    popup.addEventListener('click', function (event) {
        // Find the closest .popup-tab button (handles clicks on images/links inside)
        const tab = event.target.closest('.popup-tab');

        if (tab) {
            const tabNum = tab.dataset.tab;

            // Remove active class from all tabs and contents in this popup
            popup.querySelectorAll('.popup-tab').forEach(t => t.classList.remove('active'));
            popup.querySelectorAll('.popup-content').forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            popup.querySelector(`.popup-content[data-content="${tabNum}"]`).classList.add('active');
        }
    });
});
