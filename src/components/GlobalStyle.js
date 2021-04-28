import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
body{
    background-color:#070B09;
    font-family: 'Inter', sans-serif;
}
    



button{
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding: 1rem 1rem ;
    border : 3px solid #4B110E;
    background: transparent;
    color:#B3CDB0;
    transition:all 0.5s ease;
    &:hover{
        background-color: #4B110E;
        color: #B3CDB0;
    }
    font-family: 'Inter', sans-serif;
    
}
h2{
    font-weight:lighter;
    font-size:3rem;

}
h3{
    color: white;
}
h4{
    font-weight:bold;
    font-size:2rem;
    color:#a72020;
}
span{
    font-weight: bold;
    color:#23d997
}
a{
    font-size:1.1rem;
}
p{
    padding:2rem 0rem;
    color:#B3CDB0;
    font-size:1.1rem;
    line-height:150%;
}


`;

export default GlobalStyle;
