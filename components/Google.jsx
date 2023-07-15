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

  return (
    <LoadScript googleMapsApiKey='AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {detalle.map((inmueble, index) => (
          <Marker 
            key={index} 
            position={{
              lat: parseFloat(inmueble.direccion_latitud),
              lng: parseFloat(inmueble.direccion_longitud)
            }}
          >
            <InfoWindow position={{
              lat: parseFloat(inmueble.direccion_latitud),
              lng: parseFloat(inmueble.direccion_longitud)
            }}>
              <div>
                <h4>{inmueble.nombre_desarrollo}</h4>
                <p>${inmueble.precio} MXN</p>
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  )
}
