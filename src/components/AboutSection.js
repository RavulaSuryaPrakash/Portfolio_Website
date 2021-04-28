import React from "react";
import home2 from "../img/home2.jpg";
//styled
import styled from "styled-components";
import {About,Description,Image,Hide} from "../styles";

const AboutSection =()=>{
    return(
        <About className="about">
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Dreams without <span>Goals</span></h2>
                    </Hide>
                    <Hide>
                        <h2>are just <span>Dreams</span></h2>
                    </Hide>
                </div>
                <p>Photographer and Filmmaker. Lover of coffee and good stories. we have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home2} alt="a man standing"/>
            </Image>
        </About>
    );
};




export default AboutSection ;