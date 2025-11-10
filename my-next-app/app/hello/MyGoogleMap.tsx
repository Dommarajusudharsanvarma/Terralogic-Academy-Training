"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
    width: "100%",
    height: "600px",
}; 

const center = {
     lat: 12.9716,
     lng: 77.5946
};

const markers = [
    { id: 1, position: { lat: 12.9716, lng: 77.5946 }, label: "Bangalore" },
    { id: 2, position: { lat: 13.0827, lng: 80.2707 }, label: "Chennai" },
];


export default function GoogleMapComponent(){
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

    return(
        <LoadScript googleMapsApiKey= {apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
                {markers.map((marker)=>(
                    <Marker
                    key={marker.id}
                    position={marker.position}
                    label={marker.label}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}
