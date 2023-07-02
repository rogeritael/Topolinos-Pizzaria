import styled, { keyframes } from "styled-components";

const menu_entry = keyframes`
    to {
        margin-left: 0;
        opacity: 1;
    }
`;

interface StyledNavProps {
    isModalOpen: boolean
}

export const StyledNav = styled.nav<StyledNavProps>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: ${props => props.isModalOpen === true ? 'flex' : 'none'};
    
    ul {
        z-index: 11;
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #fff;
        margin-left: -100px;
        opacity: 0;
        animation: ${menu_entry} 300ms ease-in-out forwards;

        li {
            max-width: 425px;
            width: fit-content;
            text-transform: uppercase;
            font-size: 20px;
            margin-right: 24px;
            background-color: #fff;
            z-index: 11;

            &:first-child {
                width: 100%;
                text-align: right;
                padding: 12px 24px;
                
                svg {
                    font-size: 24px;
                    cursor: pointer;
                    transition: 200ms;

                    &:hover {
                        scale: 1.1;
                    }
                }
            }
            
            a {
                padding: 24px;
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }

    .background {
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
    }
`;