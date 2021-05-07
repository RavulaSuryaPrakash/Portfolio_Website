import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Nav =()=>{
    return(
        <StyledNav>
            <h2>
                <Link id="logo" to="/">
                    Memento
                </Link>
            </h2>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>

    );
};


const StyledNav = styled.nav`
    display:flex;
    justify-content: space-between;
    min-height:10vh;
    margin:auto;
    padding: 0rem 10rem;
    background:#1d1d1d;
    #logo{
        font-family: "lobster",cursive;
        font-size:1.6rem;
        font-weight: lighter;
    }
    a{
        text-decoration: none;
        color:white;
        
    }
    ul{
        display:flex;
        list-style-type: none;
        align-items:center;
        
    }
    li{
        padding-left:6rem;
        position: relative;
    }

`



export default Nav ;