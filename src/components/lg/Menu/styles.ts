import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    max-width: 1440px;
    padding: 40px;
    z-index: 3;
    top: 0;
    background-color: var(--orange);
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mobile_menu {
        font-size: 32px;
        display: none;
        fill: #fff;
        stroke: #fff;
    }

    .right_side_container {
        display: flex;
        align-items: center;
        gap: 64px;

        nav {
            a {
                color: #fff;
                margin-left: 32px;
                font-weight: bold;
            }
        }
    }

    @media(max-width: 768px){
        .mobile_menu {
            display: block;
        }

        .right_side_container {
            .menu {
                display: none;
            }
        }
    }

    @media(max-width: 620px){
        padding: 40px 20px;
    }
`;