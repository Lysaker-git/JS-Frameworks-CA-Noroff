import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const size = {
    mobile: '768px',
    laptop: '1440px'
}

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`


export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Atkinson Hyperlegible', sans-serif;


    }
    ul {
        list-style: none;
    }
    body {
        background: linear-gradient(193deg, rgba(10,5,5,1), rgba(10,5,0,.8));
        backdrop-filter: blur(10px);
        background-size: 200%;
        min-height: 100vh;
        background-repeat: no-repeat;
        
    }
    body > * {
        max-width: clamp(350px, 90vw, 1200px);
        margin: 0 auto;
    }
    main {
        padding-top: 2rem;
        position: relative;
        
        &::before {
            content: '';
            z-index: -1;
            position: absolute;
            width: 100%;
            top: 0;
            height: 26rem;
            /* background: radial-gradient(circle, rgba(0,0,0,.2) 0%, rgba(10,5,5,0) 100%); */
            box-shadow: -1px -23px 13px -24px rgba(0,0,0,0.5), -1px -23px 3px -24px rgba(255,255,255,0.2);
        }
        > section:first-of-type {
            width: 100%;
            display:grid;
            place-content: center;
            margin-bottom: 2rem;
            h1 {
                color: rgb(238, 241, 239);
                font-size: clamp(1rem, .5rem + 2vw, 5rem);
            }
            p {
                color: rgb(238, 241, 239);
                justify-self: center;
                span {
                    text-decoration: underline;
                }
            }
            span {
                color: rgba(234, 144, 16,0.5);
            }
        }
        h2 {
            color: rgb(238, 241, 239);
            margin-bottom: 1rem;

        }
        div {
            > section a {
                display: block;
                height: 300px;
            }
        }
        > div {
            &:not(:first-of-type),
            &:first-of-type > div {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                overflow: hidden;
                gap: 1rem 2rem;
            }
            &:first-of-type > div {
                height: fit-content;
                margin-bottom: 10rem;
            }
            @media (max-width: 1070px) {
                &:not(:first-of-type),
                &:first-of-type > div {
                    grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 670px) {
                &:not(:first-of-type),
                &:first-of-type > div {
                    grid-template-columns: repeat(1, 1fr);
                }
            }
        }
    }
    ul {
        list-style: none;
    }
}`