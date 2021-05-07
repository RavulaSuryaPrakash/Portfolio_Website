import React from "react";
//styles
import styled from "styled-components"; 
import {About} from "../styles";

const FaqSection = () =>{
    return(
        <Faq>
            <h2>Any Question <span>FAQ</span> <span>?</span></h2>
            <div className="question">
                <h4>How Do I Start ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, fugiat</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, fugiat</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different payment methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, fugiat</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Product do you offer ?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, fugiat</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    );
};
const Faq = styled(About)`
    display: block;
    background: linear-gradient(to bottom, #101918 0%, #070B09 100%);
    color:white;
    span{ 
        display:inline-block;
        color:gray;
    };
    h2{
        padding-bottom:1rem;
        font-weight:bold;
        color:#a72020;
    };
    .faq-line{
        background: #777373;
        height: 0.2rem;
        margin:1rem 0rem;
        width:100%;
    };
    .question{
        padding: 1rem 0rem;
        cursor:pointer;
    };
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 0.5rem 0rem;
            color:gray;
        };
    };


    
`;



export default FaqSection ;