"use client"
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";


export default function MapComponent({ detalle }) {
  
  const mapStyles = {
    height: "1000px",
    width: "100%"
  };

  if (!detalle || detalle.length === 0) {
    return <p>No se encontraron inmuebles.</p>;
  }

  const defaultCenter = {
    lat: parseFloat(detalle[0].direccion_latitud),
    lng: parseFloat(detalle[0].direccion_longitud)
  }

  // Define el objeto del icono para los marcadores.
  const markerIcon = {
    path: 'M0 -1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 4a2 2 0 0 1 4 0c0 2-2 4-2 4s-2-2-2-4z', // SVG path para un círculo
    fillColor: 'red',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 2,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {detalle.map((inmueble, index) => {
          return (
            <Marker 
              key={index} 
              position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud)
              }}
              icon={markerIcon}  // Asigna el icono personalizado a cada marcador
            >
              <InfoWindow position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud)
              }}>
                <div>
                  <h4>{inmueble.nombre_desarrollo}</h4>
                  <p>${inmueble.precio} MXN</p>
                  {console.log(inmueble.precio)}
                </div>
              </InfoWindow>
            </Marker>
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}
