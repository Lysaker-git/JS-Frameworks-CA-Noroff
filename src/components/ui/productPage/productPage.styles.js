import styled from 'styled-components'

export const StyledProductContainer = styled.div`
    section:first-of-type {
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        text-align: end;
        color: white;
        box-shadow: ${(props) => props.theme.color.boxShadow};

        > * {
            flex: 1 1 500px;
        }
        h1 {
            font-size: 2rem;
        }

        > div:first-of-type {
            width: 50%;
            height: 30rem;

            img {
                width: 100%;
                height: 100%;
                overflow: hidden;
                object-position: center;
                object-fit: cover;
            }
        }
        aside {
            background-color: ${(props) => props.theme.color.darkOpacity};
            padding: 1rem;
            display: flex;
            flex-direction: column;
            height: 30rem;
            
            > div:first-of-type {
                height: fit-content;
                display: flex;
                height: 5rem;
                margin-left: auto;
                padding: 1rem 0;
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
            div:nth-child(3) {
                max-width: 20ch;
                margin-left: auto;
                margin-top: auto;
                margin-bottom: 1rem;
            }
            > div:nth-child(4) {
                display: flex;
                gap: 1rem;
                place-content: end;
                p {
                    margin-top: 1rem;
                    padding: 1rem 2rem; 
                    background-color: ${(props) => props.theme.color.darkOpacity};
                }
            }
            > div:last-of-type {
                button {
                    margin-top: 1rem;
                    padding: .5rem 1rem;
                    background-color: ${(props) => props.theme.color.accentOpacity};
                    border: none;
                    font-size: 1.5rem;
                    box-shadow: ${(props) => props.theme.color.boxShadow};
                    cursor: pointer;
                    transform: translateY(0);
                    transition: all .2s ease-in-out;

                    &:active {
                        transform: translateY(5px);
                    }
                }
            }
        }
    }
    section:last-of-type {
        margin-top: 5rem;
        color: ${(props) => props.theme.color.white};
        max-width: 700px;

        div {
            padding: 2rem;
            background-color: ${(props) => props.theme.color.darkOpacity};
            margin-bottom: 1rem;
            p {
                margin-top: .5rem;
            }
        }
    }
`