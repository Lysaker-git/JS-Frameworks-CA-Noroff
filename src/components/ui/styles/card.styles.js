import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: ${(props) => props.theme.color.boxShadow};
    background-color: ${(props) => props.theme.color.darkOpacity};
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
        color: ${(props) => props.theme.color.dark};
        font-weight: bold;
        height: 100%;
        width: 100%;
        display: grid;
        place-content: center;
        font-size: 2rem;
        background: ${(props) => props.theme.color.accentOpacity};
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
            background: ${(props) => props.theme.color.accentOpacity};
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
            color: ${(props) => props.theme.color.accent};
        }

        div:last-of-type {
            background-color: ${(props) => props.theme.color.darkOpacity};
            padding: .2rem 1rem;
            display: grid;
            place-content: center;

            p:not(:last-child) {
                position: relative;
                color: ${(props) => props.theme.color.light};
            }

            p:not(:last-child)::after {
                content: '';
                position: absolute;
                bottom: 50%;
                left: 0;
                right: 0;
                border-bottom: 3px solid ${(props) => props.theme.color.accent};
                transform: translateY(50%);
                transform: rotate(-9deg)
            }
        }
    }
`