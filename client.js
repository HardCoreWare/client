$(document).ready(function(){

    var req = {

        device:{
        
            code: "6dsK8p93",

            password: "p455w0rd"

        }

    };

    var map = new Map("map",[19,-99],15,'satellite');

    $.ajax({

        method:"POST",

        url:"http://localhost/gps/client/read/data",

        data: {"req":JSON.stringify(req)},

        cache: false,

        success: function(dat){

            console.log(dat);

            data = JSON.parse(dat);

            var path=[];

            data.body.forEach(point => {

                var p=[];

                p[0]=parseFloat(point[0]);

                p[1]=parseFloat(point[1]);

                path.push(p);
  
            });

            route = new Route(map.getMap(),path);

        }

    });

});