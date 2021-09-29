import { createGlobalStyle } from "styled-components";
import "normalize.css";
import Background from "./assets/background.png";

export default createGlobalStyle`
:root{
    font-size: 20px;
}

*,*:after,*:before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
h1,h2,h3,span,div,p,input,label,li{
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 200;
    letter-spacing: 1px;
}
html{
    height: 100%
}
body{
    height: 100%;
    background: url(${() => Background}) no-repeat center center fixed;
    background-color: #313233;
    background-size: cover; 
}
`;
