/* "use client"
import { useEffect, useRef } from 'react';

const Mapa = ({ inmuble }) => {
  const mapRef = useRef();
  console.log(inmuble);

  useEffect(() => {
    const loadMapScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', resolve);
        document.body.appendChild(script);
      });
    };

    loadMapScript().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 20.505830, lng: -100.027965 },
        zoom: 15
      });

      for (let i = 0; i < inmuble.length; i++) {
        const inmueble = inmuble[i];
        const marker = new google.maps.Marker({
          position: { lat: parseFloat(inmueble.direccion_latitud), lng: parseFloat(inmueble.direccion_longitud) },
          map: map,
          title: `Inmueble ${i + 1}`
        });

        const infowindow = new google.maps.InfoWindow({
          content: `<div>Precio: ${inmueble.precio}</div>`
        });

        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      }
    });
  }, []);

  return (
    <div ref={mapRef} className="col-12 col-md-12" style={{ height: "600px", width: "100%" }}></div>
  );
};

export default Mapa;
 */
/* 
import { useEffect, useRef } from 'react';

const Mapa = () => {
  const mapRef = useRef();

  useEffect(() => {
    console.log('useEffect está siendo ejecutado');
    const loadMapScript = () => {
      return new Promise((resolve) => {
        console.log('Iniciando la carga del script de Google Maps...'); // Agregamos un console.log aquí
    
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
          console.log('Script de Google Maps cargado exitosamente!'); // Agregamos otro console.log aquí
          resolve();
        });
        document.body.appendChild(script);
      });
    };

    loadMapScript().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 20.505830, lng: -100.027965 },
        zoom: 15
      });
    });
  }, []);

  return (
    <div ref={mapRef} className="col-12 col-md-12" style={{ height: "600px", width: "100%" }}></div>
  );
};

export default Mapa;
 */