import React, { useEffect, useRef } from "react";
import "./home.scss";
import osensei from "../../assets/images/osensei.jpg"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/src/images/marker.svg";
import karateSuite from "../../assets/icons/karate.png";
import L from 'leaflet';



function Home() {
    const mapRef = useRef(null);
    const [leHavreCoords, setLeHavreCoords] = React.useState([49.4905328, 0.1515774]);
    const [goderVilleCoords, setGoderVilleCoords] = React.useState([49.6453753, 0.360046]);
    const ZOOM_LEVEL = 10;
    const karateIcon = new L.Icon({
        iconUrl: karateSuite,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });
    const zoomToPosition = (coords, zoom) => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.setView(coords, zoom);
        }
    };
    return (
        <div className="general-cont">
            <div className="hero-section">
                <div className="hero-image-cont">
                    <img className="hero-image" src={osensei} alt="Osensei" />
                    <div className="shade"></div>
                </div>
                <div className="hero-info">
                    <h1 className="hero-title">Aikiryu</h1>
                    <p className="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus optio sed ratione et maiores facilis quibusdam itaque, cupiditate, laborum soluta porro temporibus inventore provident a ea veniam minus quos rem.</p>
                    <div className="contact-button">
                        <button className="white-button" onClick={() => window.location.href = "/contact"}>Contact</button>
                    </div>
                </div>
                <div className="hero-section-shade"></div>
            </div>

        <div className="text-section">
        <div className="paragraph">
                <h2>Titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio non voluptas modi minus dolores odit est, quae consectetur, hic sed debitis. Consequuntur magnam aliquid excepturi minus facilis non voluptas!
                Doloremque debitis dignissimos quidem, dolorem et rerum modi. Architecto molestiae earum dolore corrupti natus fuga odit minima deserunt itaque repellendus voluptatibus consequuntur fugit, distinctio quae, ab similique, numquam perspiciatis sequi.
                Ducimus dolores labore corporis cumque optio quasi cum, totam facere quaerat ut fugiat repellat rem dolorum laudantium. Quia nulla autem, iusto eius ducimus nihil non beatae optio, consectetur libero ut.</p>
            </div>
                <div className="divider"></div>
            <div className="paragraph">
                <h2>Titre</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio non voluptas modi minus dolores odit est, quae consectetur, hic sed debitis. Consequuntur magnam aliquid excepturi minus facilis non voluptas!
                Doloremque debitis dignissimos quidem, dolorem et rerum modi. Architecto molestiae earum dolore corrupti natus fuga odit minima deserunt itaque repellendus voluptatibus consequuntur fugit, distinctio quae, ab similique, numquam perspiciatis sequi.
                Ducimus dolores labore corporis cumque optio quasi cum, totam facere quaerat ut fugiat repellat rem dolorum laudantium. Quia nulla autem, iusto eius ducimus nihil non beatae optio, consectetur libero ut.</p>
            </div>
        </div>


            <div className="map-section">
                <div className="right">
                    <h2>Trouvez nous</h2>
                    <div className="dojos">
                        <div className="dojo-item">
                            <img onClick={() => zoomToPosition(leHavreCoords, 20)} src={karateSuite} alt="martial art suite" />
                            <h3 onClick={() => zoomToPosition(leHavreCoords, 20)}>Le Havre</h3>
                        </div>
                        <div className="dojo-item">
                            <img onClick={() => zoomToPosition(goderVilleCoords, 20)} src={karateSuite} alt="martial art suite" />
                            <h3 onClick={() => zoomToPosition(goderVilleCoords, 20)}>Goderville</h3>
                        </div>
                    </div>
                </div>



                <MapContainer ref={mapRef} center={leHavreCoords} zoom={ZOOM_LEVEL} style={{ height: "350px", width: "100%" }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"


                    />
                    <Marker position={leHavreCoords} icon={karateIcon} eventHandlers={{ click: (e) => zoomToPosition(leHavreCoords, 20) }}>
                        <Popup>
                            Le Havre
                        </Popup>
                    </Marker>
                    <Marker position={goderVilleCoords} icon={karateIcon} eventHandlers={{ click: (e) => zoomToPosition(goderVilleCoords, 20) }}>
                        <Popup>
                            Goderville
                        </Popup>
                    </Marker>
                </MapContainer>


            </div>
        </div>
    );
}

export default Home;