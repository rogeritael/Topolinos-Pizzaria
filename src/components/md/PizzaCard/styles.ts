import styled from "styled-components";
import tick from '../../../assets/icons/tick.svg'

export const StyledArticle = styled.article`
    width: 270px;
    height: 300px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    margin-top: 120px;

    figure {
        width: 58%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        background-color: var(--orange);
        position: absolute;
        top: -80px;
        overflow: hidden;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);

        &:hover {
            img {
                scale: 1.1;
            }
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            transition: 300ms;
            pointer-events: none;
        }
    }

    h2 {
        font-size: 16px;
        margin-top: 32px;
        margin-bottom: 14px;
    }

    span {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-top: 24px;
        color: var(--orange);
    }

    p {
        margin: 0 12px;
        text-align: center;
        font-size: 12px;
        color: #828282;
    }

    button {
        width: calc(100% - 16px);
        height: 40px;
        font-size: 12px;
        font-weight: bold;
        color: #fff;
        padding: 12px 24px;
        background-color: var(--yellow);
        border-radius: 4px;
        position: absolute;
        bottom: 8px;
        transition: 1000ms;

        &::after {
            content: '';
            background: url(${tick});
            width: 20px;
            height: 20px;
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%,-50%);
            opacity: 0;
            transition: 300ms;
            transition-delay: 200ms;
        }

        &.clicked {
            p {
                scale: 0.9;
                color: transparent;
            }
            &::after{
                opacity: 1;
            }
        }

        p {
            color: #fff;
            transition: 500ms;
        }

        .verified {
            display: none;
        }
    }

    @media(max-width: 768px){
        width: 240px;
        height: 280px;
    
        p {
            font-size: 14px;
        }
    }
`;