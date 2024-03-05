import React, { useEffect, useRef } from "react";
import "./home.scss";
import osensei from "../../assets/images/osensei.jpg"

import "leaflet/src/images/marker.svg";
import karateSuite from "../../assets/icons/karate.png";
import { CONSTANTS } from "../../utils/constants";
import Map from "../../components/map/map";



function Home() {
    
    const [leHavreCoords, setLeHavreCoords] = React.useState(CONSTANTS.coords.leHavre);
    const [goderVilleCoords, setGoderVilleCoords] = React.useState(CONSTANTS.coords.goderVille);
    const [zoomedPosition, setZoomedPosition] = React.useState(null);


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
                            <img onClick={() =>{
                                 setZoomedPosition(leHavreCoords.coords);
                                //  console.log(leHavreCoords);
                            }} src={karateSuite} alt="martial art suite" />
                            <h3 onClick={() => setZoomedPosition(leHavreCoords.coords)}>Le Havre</h3>
                        </div>
                        <div className="dojo-item">
                            <img onClick={() => setZoomedPosition(goderVilleCoords.coords)} src={karateSuite} alt="martial art suite" />
                            <h3 onClick={() => setZoomedPosition(goderVilleCoords.coords)}>Goderville</h3>
                        </div>
                    </div>
                </div>

                <Map zoomedPositionProp={zoomedPosition} marks={[leHavreCoords, goderVilleCoords]} ></Map>



            </div>
        </div>
    );
}

export default Home;