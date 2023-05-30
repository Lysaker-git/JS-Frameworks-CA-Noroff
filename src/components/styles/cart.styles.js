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
        padding: 2rem;
        background-color: rgba(10,5,5,0.5);
        color: white;
        section:first-of-type {
            
            h2 {
                margin-bottom: .5rem;
            }
            section:not(:first-of-type) {
                margin-top: 3rem;
            }
            section {
                display: grid;
                grid-template-columns: 30% 30% 2ch 30% 1fr;
                gap: 1rem;
                margin-bottom: 3rem;
                padding: 1rem 0;
                border-bottom: 2px solid rgba(10,5,5,0.3);
                height: 100%;
                align-items: center;
                div > p {
                    text-align: end;
                }
                button {
                    position: relative;
                    border: none;
                    height: 2rem;
                    width: 2rem;
                    background: rgba(234, 144, 16, 0.3);
                    transition: all .3s ease-in-out;
                    &::before, &::after {
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 90%;
                        background-color: rgba(234, 144, 16, 0.7);
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
                        background: rgba(234, 144, 16, 0.5);
                    }
                }
            }
        }
    }
`