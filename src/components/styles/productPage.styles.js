import styled from 'styled-components'

export const StyledProductContainer = styled.div`
    section:first-of-type {
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        text-align: end;
        color: white;

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
            background-color: rgba(10,10,5,0.4);
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
                    background-color: rgba(10,10,5,0.4);
                    padding: .2rem 1rem;
                    display: grid;
                    place-content: center;
    
                    p:not(:last-child) {
                        position: relative;
                        color: rgb(169, 180, 194);
                    }
    
                    p:not(:last-child)::after {
                        content: '';
                        position: absolute;
                        bottom: 50%;
                        left: 0;
                        right: 0;
                        border-bottom: 3px solid rgba(234, 144, 16,1);
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
            > div:last-of-type {
                display: flex;
                gap: 1rem;
                place-content: end;
                p {
                    margin-top: 1rem;
                    padding: 1rem 2rem; 
                    background-color: rgba(10,10,5,0.4);
                }
            }
        }
    }
    section:last-of-type {
        margin-top: 5rem;
        color: white;
        max-width: 30ch;

        div {
            padding: 2rem;
            background-color: rgba(10,10,5,0.2);
            margin-bottom: 1rem;
        }
    }
`