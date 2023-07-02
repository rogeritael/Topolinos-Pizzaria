import styled, { keyframes } from "styled-components";

interface StyledDivProps {
    isCartOpen: boolean
}

const fadeInLeft = keyframes`
    0% {
        left: -20px;
        opacity: 0;
        transform: scaleX(1);
    }
    40% {
        left: 10px;
        opacity: 1;
        transform: scaleX(0.8);
    }
    100% {
        left: 0;
        opacity: 1;
        transform: scaleX(1);
    }
`

export const StyledDiv = styled.div<StyledDivProps>`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    transition: 500ms;

    //is Open?
    opacity: ${props => props.isCartOpen === true ? 1 : 0 };
    ${props => props.isCartOpen === false && 'pointer-events: none;'}

    .background {
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0.5;
        display: inline-block;
    }

    .cart {
        max-width: 425px;
        width: 100%;
        height: 100vh;
        background-color: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 20px 0 0 20px;
        padding: 24px 36px;
        display: flex;
        flex-direction: column;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 36px;

            h1 {
                font-size: 30px;
            }

            svg {
                cursor: pointer;
            }
        }

        .cart_items {
            flex: 1;
            
            .items_rail {
                max-height: 400px;
                display: flex;
                flex-direction: column;
                gap: 24px;
                overflow-y: auto;
                padding-right: 10px;
                padding-bottom: 24px;

                
            }

            .total {
                    border-top: 1px solid #d8d8d8;
                    padding: 20px 10px;
                    display: flex;
                    justify-content: space-between;
                }
        }

        .payment_title {
            margin: 24px 0;
        }

        .payment_method {
            margin-bottom: auto;

            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 60px;
                border-radius: 10px;
                border: 1px solid #f3f3f3;
                margin-bottom: 24px;
                padding: 14px;
                cursor: pointer;
                transition: 500ms;

                &:hover {
                    background-color: #F3F3F320;
                }

                &:last-child{
                    width: fit-content;
                    border: none;
                    line-height: 100%;

                    svg {
                        margin-right: 14px;
                    }
                }

                .check {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background-color: var(--orange);
                    position: relative;
                    opacity: 0;

                    

                    &::after {
                        content: '';
                        width: 8px;
                        height: 8px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: #fff;
                        border-radius: 50%;
                    }
                }

                .method {
                    flex: 1;
                    padding-left: 14px;
                }

                svg {
                    font-size: 20px;
                }

                &.active {
                    .check {
                        opacity: 1;
                        animation: ${fadeInLeft} 300ms;
                    }

                    border-color: var(--orange);
                }
            }
        }

        .cart_footer {
            margin-top: 20px;

            button {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: bold;
                padding: 18px 46px;
                border-radius: 12px;
                background-color: var(--orange);
                color: #fff;
                margin: 0 auto;
            }
        }
    }

    @media(max-width: 425px){

        .cart {
            height: 90vh;
            border-radius: 20px 20px 0 0;
            padding: 20px 20px 0 20px;
            
            .cart_items .items_rail {
                max-height: calc(90vh - 240px);
            }

            .cart_footer button {
                width: 100vw;
                margin-left: -20px;
                border-radius: 0;
                padding: 24px;
            }
        }
    }
`;