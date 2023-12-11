import React from "react";
import "./home.scss";
import osensei from "../../assets/images/osensei.jpg"

function Home() {




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
        </div>
    );
}

export default Home;