import styled from 'styled-components';

export const Header = styled.header.attrs((props) => ({
    iscolor: props.isColor ? 'true' : 'false' ,
}))`
    position: sticky;
    z-index: 10;
    background: ${(props) => (props.isColor ? 'rgba(10,10,5,0.9)' : 'transparent')};
    background-size: 100vw 100vh;
    top: 0;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;