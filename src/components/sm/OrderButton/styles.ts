import styled from "styled-components";

export const StyledButton = styled.button`
    color: var(--orange);
    padding: 20px 40px;
    font-size: 16px;
    width: fit-content;
    border-radius: 36px;
    transition: 300ms;
    font-weight: bold;

    &:hover {
        scale: 1.05;
    }
`;