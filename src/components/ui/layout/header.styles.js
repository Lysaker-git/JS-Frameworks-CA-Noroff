import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
        a  {
            position: relative;
            text-decoration: none;
            color: ${(props) => props.theme.color.white};
            font-weight: bold;
            font-size: 1.4rem;
            span {
                padding-bottom: .5rem;
            }
            &::before {
                content: '';
                position: absolute;
                bottom: 0; 
                height: 3px;
                width: 2.4rem;
                background-color: white;
                opacity: .7;
            }
        }
    }
    form+a {
        position: absolute;
        right: 0;
        padding: .2rem 1rem;
        top: .9rem;
        background-color: ${(props) => props.theme.color.accentOpacity};
        color: ${(props) => props.theme.color.white};
        text-decoration: none;
        font-weight: bold;
    }
    img {
        position: relative;
        height: 21px;
        bottom: -2px;
    }
`;