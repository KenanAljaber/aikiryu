import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { CONSTANTS } from "../../utils/constants";
import karateSuite from "../../assets/icons/karate.png";
const Map = ({ marks, zoomedPositionProp = null, height = "350px", width = "100%" }) => {
    const mapRef = useRef(null);

    
    useEffect(() => {
        console.log("zoomedPositionProp", zoomedPositionProp);
        if (zoomedPositionProp !== null) {

            zoomToPosition(zoomedPositionProp, 15);
        }
    }, [zoomedPositionProp]);

    const zoomToPosition = (coords, zoom) => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.setView(coords, zoom);
        }
    };

    const ZOOM_LEVEL = 10;
    const karateIcon = new L.Icon({
        iconUrl: karateSuite,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (

        <MapContainer ref={mapRef} center={CONSTANTS.coords.leHavre.coords} zoom={ZOOM_LEVEL} style={{ height: height, width: width }} >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


            />
            {marks.map((mark, index) => (
                <Marker key={index} position={mark.coords} icon={karateIcon} eventHandlers={{ click: (e) => zoomToPosition(mark.coords, 20) }}>
                    <Popup>
                        <p>{mark.name}</p>
                    </Popup>
                </Marker>

            ))}
        </MapContainer>
    )
}

export default Map
