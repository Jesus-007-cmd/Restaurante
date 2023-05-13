const obtenerUbicacion = () => {
    var cordenadasXY=""
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
	}

	const onUbicacionConcedida = ubicacion => {
		//console.log("Tengo la ubicación: ", ubicacion);
        
        //console.log("La latitud es:" + ubicacion.coords.latitude+ " y la longitud es: "+ ubicacion.coords.longitude)
        //const latitud = ubicacion.coords.latitude;
		// longitud = ubicacion.coords.longitude;
        cordenadasXY="La latitud es:" + ubicacion.coords.latitude+ " y la longitud es: "+ ubicacion.coords.longitude
		//const enlacemaps = `https://www.google.com/maps/@${latitud},${latitud},20z`;
	}
  
	const onErrorDeUbicacion = err => {
		console.log("Error obteniendo ubicación: ", err);
	}
 
	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisión
		maximumAge: 0, // No queremos caché
		timeout: 5000 // Esperar solo 5 segundos
	};
	// Solicitar
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
    console.log(cordenadasXY)
return cordenadasXY;
   // return navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
    
};
export default obtenerUbicacion;