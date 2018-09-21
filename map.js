class Map {

    constructor(divId,point,zoom){

        this.map = new google.maps.Map(document.getElementById(divId), {

            center: {lat: point[0], lng: point[1]},
    
            zoom: zoom

        });

    }

    move(point,zoom){

        var center={lat:point[0],lng:point[1]};

        this.map.setCenter(center);

        this.map.setZoom(zoom);


    }

    getMap(){

        return this.map;

    }

}







