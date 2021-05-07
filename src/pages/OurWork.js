import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
//images
import work1 from "../img/work1.jpg";
import work2 from "../img/work2.jpg";
import work3 from "../img/work3.jpg";


 

const OurWork = ()=>{
    return(
    <Work>
        <Movie>
            <h2> The Athlete</h2>
            <div className="Line"></div>
            <Link>
                <img src={work3} alt="athete"/>
            </Link>
        </Movie>
        <Movie>
            <h2> The Racer</h2>
            <div className="Line"></div>
            <Link>
                <img src={work2} alt="racer"/>
            </Link>
        </Movie>
        <Movie>
            <h2> Good Times</h2>
            <div className="Line"></div>
            <Link>
                <img src={work1} alt="women"/>
            </Link>
        </Movie>

    </Work>
    )
};

const Work = styled.div`
    min-height:100vh;
    img{
        width: 700px;
    }
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding:0.5rem 0rem;
    }
    background:white;
`;
const Movie = styled.div`
    padding-bottom:10rem;
    .Line{
        height: 0.3rem;
        background: #cccccc;
        margin-bottom:2rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit:cover;
    }
`;

export default OurWork; 