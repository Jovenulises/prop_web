"use client"

import { GoogleMap, LoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import numeral from 'numeral';
import { useRouter } from 'next/navigation'

export default function MapComponent({ detalle }) {
//console.log(detalle)
  const router = useRouter()

  const propertyTypeToColor = {
    'CASA': '#1146a3',
    'DEPARTAMENTO': '#b52f2f',
    'RCASA': 'yellow',
    'RDEPARTAMENTO': 'green',
    'CPREVENTA': 'red',
    'DPREVENTA': 'blue',
  };

  const mapStyles = {
    height: "570px",
    width: "100%"
  };

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
        {detalle.map((inmueble) => {
          const propertyColor = propertyTypeToColor[inmueble.modelo_tipo_uno] || 'gray';
      //   console.log(inmueble.id_inmueble)
         
       const markerIcon = {
            path: 'M0 -1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 4a2 2 0 0 1 4 0c0 2-2 4-2 4s-2-2-2-4z', // SVG path para un círculo
            fillColor: propertyColor,
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 4,
          };

          
          // gray será el color predeterminado si no se encuentra una coincidencia
          return (
            <MarkerF
              key={inmueble.id_inmueble}
              position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud),
              }}
              icon={{ ...markerIcon, fillColor: propertyColor }}
            >
              <InfoWindow
                style={{ background: "red" }}
                position={{
                  lat: parseFloat(inmueble.direccion_latitud),
                  lng: parseFloat(inmueble.direccion_longitud),
                }}
              >
                <div className="list-group-item-action"
                  style={{
                    border: `4px solid ${propertyColor}`,
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px",
                    borderRadius: 8,
                  }}
                  onClick={() => {
                    if (inmueble && inmueble.id) {
                      router.push(`/detalle/${inmueble.id}`);
                      console.log(inmueble.id);
                    } else {
                      console.error('Error: inmueble.id_inmueble no existe');
                    }
                  }}
             >
                 <span> $ {numeral(inmueble.precio).format("0,0").replace(",", ",")}{" "}</span>
                </div>
              </InfoWindow>
            </MarkerF>
          );
                  })}
      </GoogleMap>
    </LoadScript>
  )
}
