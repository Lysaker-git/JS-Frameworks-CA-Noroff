import styled from 'styled-components';

export const Footer = styled.footer`
    height: 10rem;
    display: grid;
    place-content: center;
    color: ${(props) => props.theme.color.white};
    a {
        margin: 1rem auto 0;
        color: ${(props) => props.theme.color.white};
    }
`;