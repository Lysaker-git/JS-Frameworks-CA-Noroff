import styled from 'styled-components';

export const Form = styled.form`
    position: relative;

    input {
        background-color: ${(props) => props.theme.color.accentOpacityLow};
        border: none;
        height: 28px;
        color: #eef1eF;
        padding: .5rem;
        box-shadow: ${(props) => props.theme.color.boxShadow};
    }
    label {
        position: absolute;
        height: 100%;
        align-items: center;
        right: 0;
        
        
        img {
            transform: scale(0.8);
            margin: .2rem;
        }
    }
`