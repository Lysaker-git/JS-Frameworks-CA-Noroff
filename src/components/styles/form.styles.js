import styled from 'styled-components';

export const Form = styled.form`
    position: relative;

    input {
        background-color: rgba(234, 144, 16, 0.02);
        border: none;
        height: 28px;
        color: #eef1eF;
        padding: .5rem;
        box-shadow: 2px 2px 2px rgba(0,0,0,.3);
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