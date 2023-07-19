"use client"

import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import numeral from 'numeral';
import { useRouter } from 'next/navigation'

export default function MapComponent({ detalle }) {

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
        {detalle.map((inmueble, index) => {
          const propertyColor = propertyTypeToColor[inmueble.modelo_tipo_uno] || 'gray';

          const markerIcon = {
            path: 'M0 -1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 4a2 2 0 0 1 4 0c0 2-2 4-2 4s-2-2-2-4z', // SVG path para un círculo
            fillColor: propertyColor,
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 4,
          };

          const handleLogoClick = () => {
            router.push(`/detalle/${inmueble.id_inmueble}/#galeria`)
          }
          // gray será el color predeterminado si no se encuentra una coincidencia
          return (
            <Marker
              key={index}
              position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud)
              }}
              icon={markerIcon}
            >
              <InfoWindow position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud)
              }}>
                <div
                  className="list-group-item-action"
                  style={{
                    border: `2px solid ${propertyColor}`,
                    padding: '10px',
                    display: 'flex',
                    height: '100%', // Asegúrate de que el div ocupe todo el espacio disponible
                    boxSizing: 'border-box' // Para que el padding y el border no aumenten el tamaño total del div
                  }}
                  onClick={handleLogoClick}
                >
                  <p style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    $ {numeral(inmueble.precio).format('0,0').replace(',', ',')} MXN
                  </p>
                </div>
              </InfoWindow>
            </Marker>
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}
