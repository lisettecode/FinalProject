var miMap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.45738919999998, lng: -71.5315308},
    zoom: 14
  });
    

function pageXOffset(){
	this.litrosGastados = function(distancia){
		
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-419341-6', 'auto');
  ga('send', 'pageview');

 $("form").change(function() {
  var d = $('#viaje-dist').val();
  var t = $('#viaje-time').val();
  var viaje_TAX = 0.75;
 
     if (t && d && t > 0 && d > 0) {
    
         var viajex = function(dist, time) {
          var TARIFA = 2.7,
              MIN = 0.20,
              KM = 1.48,
              MINIMUM = 7;
          var price = viaje_TAX + TARIFA + (dist*KM) + (time*MIN);
      
             return (price >= MINIMUM) ? price : MINIMUM;
    };
   
         var viajes = function(dist, time) {
          var TARIFA = 2.97,
              MIN = 0.22,
              KM = 1.63,
              MINIMUM = 7.75;
             
          var price = viaje_TAX + TARIFA + (dist*KM) + (time*MIN);
             
          return (price >= MINIMUM) ? price : MINIMUM;
        };
         
        var viajeb = function(dist, time) {
          var TARIFA = 4.5,
              MIN = 0.3,
              KM = 2.17,
              MINIMUM = 10;
          var price = viaje_TAX + TARIFA + (dist*KM) + (time*MIN);
            
          return (price >= MINIMUM) ? price : MINIMUM;
        };
    
         var tarifa = function(type, d, t) {
            return Math.round(type(d, t), 2);
             
            };
            $('#viajex-val').html(tarifa(viajex, d, t));
            $('#viajeselect-val').html(tarifa(viajes, d, t));
            $('#viajeblack-val').html(tarifa(viajeb, d,t));
            $('#result').show('slow');
  }
});
        
        
	}
    
    
}
