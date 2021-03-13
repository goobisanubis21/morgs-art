import React from 'react';
import "./navPic.css";
import BeeQueen from "./Bee queen.jpg";
import Breath from "./breath.jpg";
import Fox from "./florida fox trot.jpg";
import Genisis from "./genisis.jpg";
import Golden from "./golen hour.jpg";
import Maid from "./maid in america.jpg";
import Norma from "./norma jeane.jpg";
import Poppy from "./poppy.jpg";
import Rein from "./reincarnation.jpg";
import Ser from "./serindipity.jpg";
import Great from "./the great escpe.jpg"


function NavPic() {
    return (
        <div className="carouselMainDiv">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner data-interval=2000">
                    <div className="carousel-item active">
                        <img src={BeeQueen} className="d-block w-50" alt="Beequeen"></img>
                    </div>
                    <div className="carousel-item data-interval=2000">
                        <img src={Breath} className="d-block w-50" alt="breath"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Fox} className="d-block w-50" alt="fox"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Genisis} className="d-block w-50" alt="Genisis"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Maid} className="d-block w-50" alt="Maid"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Norma} className="d-block w-50" alt="Norma"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Poppy} className="d-block w-50" alt="Poppy"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Rein} className="d-block w-50" alt="Rein"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Ser} className="d-block w-50" alt="Ser"></img>
                    </div>
                    <div className="carousel-item data-interval= 2000">
                        <img src={Great} className="d-block w-50" alt="Great"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default NavPic
