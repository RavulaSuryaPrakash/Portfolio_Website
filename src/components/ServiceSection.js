import React from 'react';
//import iocns
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//import img
import home3 from '../img/thiago.jpg'
//styles
import {About,Description,Image,Hide} from "../styles";
import styled from 'styled-components';



const ServicesSection = () =>{
    return(
        <Services>
            <Description_Service>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock}alt="icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork}alt="icon"/>
                            <h3>Team Work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm}alt="icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money}alt="icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </Card>
                </Cards>
            </Description_Service>
            <Image_service>
                <img src={home3} alt="lady"/>

            </Image_service>
        </Services>
    );
};

const Services = styled(About)`
    background:#101918;
    color:white;
    flex-direction:row-reverse;
    span{
        color:#23D997;
    }
    p{
        color:#E1DEDB;
        width:70%;
        padding:2rem 0rem 4rem 0rem;
        font-size:1rem;
    }
    h2{
        padding-bottom:4rem;
        color:#E1DEDB;
    }
    
`;

const Description_Service = styled(Description)`
    padding-left:8rem;

`
const Cards =styled.div`
    display:flex;
    flex-wrap: wrap;
    
`
const Card = styled.div`
    flex-basis: 15rem;
    .icon{
        display:flex;
        align-items:center;
        h3{
            margin-left:1rem;
            background:#E1DEDB;
            color: black;
            padding:0.3rem;
            font-size:1rem;
        }
    }
`
const Image_service =styled(Image)`
    height:80%;
`
export default ServicesSection;