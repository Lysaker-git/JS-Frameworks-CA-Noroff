import styled from 'styled-components';

export const ContactContainer = styled.section`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: fit-content;
    width: fit-content;
    position: relative;
    background: ${(props) => props.theme.color.darkOpacity};
    padding: 2rem;
    color: ${(props) => props.theme.color.white};
    border-radius: ${(props) => props.theme.myStyles.borderRadius};
    box-shadow: ${(props) => props.theme.color.boxShadow};
    div {
        display: flex; 
        flex-direction: column;

        * {
            margin: 0 auto;
        }
    }

    input, label, textarea {
        width: 350px;
    }
    input, textarea {
        padding: .5rem;
        font-family: 'Atkinson Hyperlegible', sans-serif;
        background-color: ${(props) => props.theme.color.accentOpacityLow};
        border: 1px solid ${(props) => props.theme.color.dark};
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.color.white};
        border-radius: ${(props) => props.theme.myStyles.borderRadius};
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
    label {
        font-size: 1.5rem;
    }
    textarea {
        resize: none;
        height: 15ch;
    }
    h1 {
        margin: 0 auto 2rem;
    }
    button {
        display: flex;
        margin: 0 auto;
        padding: 1rem 2rem;
        background-color: ${(props) => props.theme.color.accentOpacity};
        border: none;
        box-shadow: ${(props) => props.theme.color.boxShadow};
        border-radius: ${(props) => props.theme.myStyles.borderRadius};
        font-size: 1.5rem;

        cursor: pointer;
        transition: all .2s ease-in-out;
        transform: translateY(0);

        &:active {
            transform: translateY(5px);
        }
    }
`