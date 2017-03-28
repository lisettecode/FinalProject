function init () {
	
}
//para definir lat y lng

var miMap;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.45738919999998, lng: -71.5315308},
    zoom: 14
  });

//Obtener Regiones:
$(document).ready(get_regiones());
var listaCiudades;
function get_regiones(){
	listaCiudades=[
        {"name": "Seleciona"},
		{"name": "arica", "distance": 0},
		{"name": "iquique","distance": 0},
		{"name": "antofagasta","distance": 0},
		{"name": "copiapo","distance": 0},
		{"name": "la_serena","distance": 0},
		{"name": "valparaiso","distance": 0	},
		{"name": "rancagua","distance": 0},
		{"name": "talca",	"distance": 0},
		{"name": "concepcion","distance": 0},
		{"name": "temuco","distance": 0	},
		{"name": "valdivia","distance": 0},
		{"name": "puerto_montt","distance": 0},
		{"name": "coyhaique","distance": 0},
		{"name": "punta_arenas","distance": 0},	
		{"name": "santiago","distance": 0}
	];
    var carga='';
    for(var i in listaCiudades){
        var html ='<option>'+listaCiudades[i].name+'</option>';
        carga+=html;
    }
    $('.selectpicker').html(carga);
}

//ValidarSelectOrigen-Destino

function validar() 
{ 
selec=ciudadesSelect.formulario.selectedIndex 
if (ciudadesSelect.formulario.options[selec].value==""){ 
return false 
} 
return true 
}

function eventoAlerta(){
    swall("Excelente","Tenemos tu origen y destino", "success")
}



