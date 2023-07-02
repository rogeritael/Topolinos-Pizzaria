import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--orange);
    
    p {
        color: #fff;
        margin-bottom: 14px;

        &:nth-child(2) {
            margin-bottom: 24px;
        }
    }

`;