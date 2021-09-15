import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: #111;
        

    }

    button{
        font-weight: bold;
        font-size: 1.1 rem;
        cursor:pointer;
        padding: 1rem 2rem;
        border: 2px solid lightblue;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover {
            background-color: lightblue;
            color:white;
        }

        
    }

    h2{
            font-weight:lighter;
            font-size: 4 rem;
            color:white;

    }
    h3{
        color:white;
    }
    h4{
        font-family: bold;
        color:white;
        
    }
    span{
        font-family: bold;
        color:lightblue;
    }
    p{
        padding:3rem 0rem;
        color:lightgrey;
        font-size: 1.5rem;
        line-height:150%;

    }
`;

export default GlobalStyle;
