
"use client"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapComponent({ lat, lng }) {
  const mapStyles = {
    height: "500px",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyA889ZxazkPDgBYD58fWZEvMNdKjmUSMZo'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker key='marker' position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
