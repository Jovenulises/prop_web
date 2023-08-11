"use client"

import { GoogleMap, LoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import numeral from 'numeral';
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function MapComponent({ detalle }) {
  const router = useRouter()

  const [zoom, setZoom] = useState(0);
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef();

  const propertyTypeToColor = {
    'CASA': '#1146a3',
    'DEPARTAMENTO': '#b52f2f',
    'RCASA': 'yellow',
    'RDEPARTAMENTO': 'green',
    'CPREVENTA': '#1146a3',
    'DPREVENTA': '#b52f2f',
  };

  const mapStyles = {
    height: "590px",
    width: "100%"
  };


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, () => {
        console.error("Permission denied");
        setUserLocation({
          lat: parseFloat(detalle[0].direccion_latitud),
          lng: parseFloat(detalle[0].direccion_longitud),
        });
      });
    } else {
      console.error("Geolocation not supported");
      setUserLocation({
        lat: parseFloat(detalle[0].direccion_latitud),
        lng: parseFloat(detalle[0].direccion_longitud),
      });
    }
  }, []);


  const defaultCenter = userLocation || {
    lat: parseFloat(detalle[0].direccion_latitud),
    lng: parseFloat(detalle[0].direccion_longitud)
  }

  const handleCenterChanged = () => {
    if (mapRef.current) {
      const currentCenter = mapRef.current.getCenter();
      console.log('Centro actual del mapa:', currentCenter.toString());
    }
  };
  


  const handleZoomChanged = () => {
    if (mapRef.current) {
      const currentZoom = mapRef.current.getZoom();
      setZoom(currentZoom);
      // Cambia el centro del mapa al centro deseado cada vez que cambia el zoom
      mapRef.current.panTo(defaultCenter);
    }
  }

  if (!userLocation) {
    return <div>Loading...</div>; // muestra una pantalla de carga mientras se obtiene la ubicación del usuario
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={7}
        center={defaultCenter}
        onLoad={(map) => { mapRef.current = map; }}
        onZoomChanged={handleZoomChanged}
        onCenterChanged={handleCenterChanged} // Añade este evento
      >
        {detalle.map((inmueble) => {
          const propertyColor = propertyTypeToColor[inmueble.modelo_tipo_uno] || 'gray';

          const markerIcon = {
            path:  'M -2, 0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0', // SVG path para un círculo
            fillColor: propertyColor,
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 2 ,
          };

          return (
            <MarkerF
              key={inmueble.id}
              position={{
                lat: parseFloat(inmueble.direccion_latitud),
                lng: parseFloat(inmueble.direccion_longitud),
              }}
              icon={{ ...markerIcon, fillColor: propertyColor }}
              
              onClick={() => {
                if (inmueble && inmueble.id) {
                  router.push(`/detalle/${inmueble.id}/#galeria`);
                  console.log(inmueble.id);
                } else {
                  console.error('Error: inmueble.id_inmueble no existe');
                }
              }}
            >
              {zoom > 8 && inmueble.precio &&
                <InfoWindow
                  style={{ background: "red" }}
                  position={{
                    lat: parseFloat(inmueble.direccion_latitud),
                    lng: parseFloat(inmueble.direccion_longitud),
                  }}
                >
                  <div className="list-group-item-action btn"
                    style={{
                      border: `4px solid ${propertyColor}`,
                      backgroundColor: "white",
                      color: "black",
                      padding: "10px",
                      borderRadius: 8,
                    }}
                    onClick={() => {
                      if (inmueble && inmueble.id) {
                        router.push(`/detalle/${inmueble.id}/#galeria`);
                        console.log(inmueble.id);
                      } else {
                        console.error('Error: inmueble.id_inmueble no existe');
                      }
                    }}
                  >

                    <span> $ {numeral(inmueble.precio).format("0,0").replace(",", ",")}{" "}</span>

                  </div>
                </InfoWindow>
              }
            </MarkerF>
          );
        })}
      </GoogleMap>
    </LoadScript>
  )
}
