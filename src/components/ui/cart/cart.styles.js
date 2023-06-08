import styled from 'styled-components';

export const StyledCart = styled.section`

    
    

    h1 {
        color: white;
        width: 100%;
        display: grid;
        place-content: center;
        margin-bottom: 2rem;
    }
    > div {
        background-color: ${(props) => props.theme.color.darkOpacity};
        padding: 2rem;
        border-radius: ${(props) => props.theme.myStyles.borderRadius};
        box-shadow: ${(props) => props.theme.color.boxShadow};
        color: ${(props) => props.theme.color.white};

        > div:first-of-type {
            > section:first-of-type {
                > div {
                    section {
                        border-bottom: 1px solid ${(props) => props.theme.color.darkOpacity};
                        margin-bottom: 1rem;
                        
                        a {
                            color: ${(props) => props.theme.color.accent};
                            text-decoration: underline;
                        }
                        > div {
                            display: flex;
                            justify-content: space-between;
                            margin: 1rem 0;
                        }
                        > div:first-of-type {
                            > div > p:first-of-type {
                                position: relative;
                                width: fit-content;
                                margin-left: auto;
                                color: ${(props) => props.theme.color.light};
                                &::after {
                                    content: '';
                                    position: absolute;
                                    bottom: 50%;
                                    left: 0;
                                    right: 0;
                                    border-bottom: 3px solid ${(props) => props.theme.color.accent};
                                    transform: translateY(50%);
                                    transform: rotate(-9deg);
                                }
                            }
                        }
                        > div:last-of-type {
                            button {
                                position: relative;
                                border: none;
                                height: 2rem;
                                width: 2rem;
                                background: ${(props) => props.theme.color.accentOpacity};
                                transition: all .3s ease-in-out;
                                cursor: pointer;
                                &::before, &::after {
                                    content: '';
                                    position: absolute;
                                    width: 4px;
                                    height: 90%;
                                    background-color: ${(props) => props.theme.color.accentOpacity};
                                    top: 50%;
                                    left: 50%;
                                    transform: translate(-50%, -50%);
                                }
                                &::before {
                                    transform: translate(-50%, -50%) rotate(45deg);
                                }
                                &::after {
                                    transform: translate(-50%, -50%) rotate(-45deg);
                                }
                                &:hover {
                                    background: ${(props) => props.theme.color.accentOpacity};
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /* > div {
        padding: 2rem;
        background-color: ${(props) => props.theme.color.darkOpacity};
        color: white;
        section:first-of-type {
            
            h2 {
                margin-bottom: .5rem;
                
            }
            > section {
                margin-top: 3rem;
                gap: 1rem;
                margin-bottom: 3rem;
                padding: 1rem 0;
                border-bottom: 2px solid ${(props) => props.theme.color.darkOpacity};
                height: 100%;
                align-items: center;
                h3, a {
                    text-decoration: underline;
                    color: ${(props) => props.theme.color.accent};
                    width: fit-content;
                }
                div > p, > p:first-of-type {
                    text-align: end;
                }
                div > div > p:first-of-type {
                    position: relative;
                    width: fit-content;
                    margin-left: auto;
                    color: ${(props) => props.theme.color.light};
                    &::after {
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
                > div button {
                    position: relative;
                    border: none;
                    height: 2rem;
                    max-width: 2rem;
                    background: ${(props) => props.theme.color.accentOpacity};
                    transition: all .3s ease-in-out;
                    cursor: pointer;
                    &::before, &::after {
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 90%;
                        background-color: ${(props) => props.theme.color.accentOpacity};
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    &::before {
                        transform: translate(-50%, -50%) rotate(45deg);
                    }
                    &::after {
                        transform: translate(-50%, -50%) rotate(-45deg);
                    }
                    &:hover {
                        background: ${(props) => props.theme.color.accentOpacity};
                    }
                }
            }
        }
        > section:last-of-type {
            p {
                margin-top: 1rem;
                font-size: 3rem;
                font-weight: bold;
                text-decoration: underline;
            }
        }
    } */
    > div > div:last-of-type {
        display: flex;
        button {
            padding: 1rem 2rem;
            border-radius: 10px;
            box-shadow: ${(props) => props.theme.color.boxShadow};
            border: none;
            font-size: 2rem;
            background-color: ${(props) => props.theme.color.accent};
            opacity: .8;
            font-weight: bold;
            margin-left: auto;
            cursor: pointer;
        }
    }
`