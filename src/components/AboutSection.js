import React from "react";
import home2 from "../img/home2.jpg";

const AboutSection =()=>{
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>dreams without <span>goals</span></h2>
                    </div>
                    <div className="hide">
                        <h2>are just <span>dreams</span></h2>
                    </div>
                </div>
                <p>Photographer and Filmmaker. Lover of coffee and good stories. we have professionals with amazing skills.</p>
                <button>contact us</button>
            </div>
            <div className="image">
                <img src={home2} alt="a man standing"/>
            </div>
        </div>
    );
};

export default AboutSection ;