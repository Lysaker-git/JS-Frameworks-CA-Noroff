import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.4);
    background-color: rgba(10,10,5,0.4);
    div:first-of-type {
        position: relative;
        height: 70%;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-position: center;
        object-fit: cover;
    }
    h3 {
        position: absolute;
        z-index: 1;
        color: rgb(10, 5, 5);
        font-weight: bold;
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        font-size: 2rem;
        background: rgba(234, 144, 16,0.5);
        background-blend-mode: multiply;
        backdrop-filter: blur(5px);
        text-align: center;
        opacity: 0;
        transition: all .3s ease-in-out;
        &:hover {
            opacity: 1;
        }
    }
    @media (max-width: 670px) {
        h3 {
            opacity: 1;
            background: rgba(234, 144, 16,0.3);
            height: fit-content;
            bottom: 0;
            width: fit-content;
            padding: .5rem 1rem;
            backdrop-filter: blur(3px);
        }
    }

    > div:last-of-type {
        height: fit-content;
        display: flex;
        height: 5rem;
        margin: auto 0;
        padding: 1rem;
        align-items: center;

        div:not(:last-child) {
            background-color: rgba(234, 144, 16,0.2);
            padding: 1rem;
            font-size: 2rem;
            font-weight: bold;
            display: grid; 
            height: 100%;
            place-content: center;
            color: rgb(234, 144, 16);
        }

        div:last-of-type {
            background-color: rgba(10,10,5,0.4);
            padding: .2rem 1rem;
            display: grid;
            place-content: center;

            p:not(:last-child) {
                position: relative;
                color: rgb(169, 180, 194);
            }

            p:not(:last-child)::after {
                content: '';
                position: absolute;
                bottom: 50%;
                left: 0;
                right: 0;
                border-bottom: 3px solid rgba(234, 144, 16,1);
                transform: translateY(50%);
                transform: rotate(-9deg)
            }
        }
    }
`