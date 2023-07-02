import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    height: 440px;
    display: flex;
    align-items: baseline;
    overflow-x: hidden;
    width: 100%;

    .rail {
        width: max-content;
        cursor: grab;
        display: flex;
        gap: 24px;
    }
`;