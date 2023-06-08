import styled from 'styled-components';

export const SuccessContainer = styled.section`
    border: 2px solid ${(props) => props.theme.color.dark};
    background-color: ${(props) => props.theme.color.darkOpacity};
    border-radius: ${(props) => props.theme.myStyles.borderRadius};
    height: 60vh;
    display: grid;
    place-content: center;
    color: ${(props) => props.theme.color.white};

    img {
        margin: 0 auto;
    }
    h1 {
        font-size: 4rem;
        margin-bottom: 0;
    }
    p {
        text-align: center;
        padding: 1rem;
        font-size: 1.2rem;
        span {
            color: ${(props) => props.theme.color.accent};
            font-weight: bold;
        }
    }
    button {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        width: fit-content;
        display: flex; 
        margin: 0 auto;
        margin-top: 4rem;
        border: none;
        border-radius: ${(props) => props.theme.myStyles.borderRadius};
        box-shadow: 3px 3px 4px ${(props) => props.theme.color.darkOpacity};
        background-color: ${(props) => props.theme.color.accent};
        cursor: pointer;
    }
`