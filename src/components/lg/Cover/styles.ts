import styled, { keyframes } from "styled-components";

const pizza_rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const StyledSection = styled.section`
    width: 100%;
    height: min(100vh, 900px);
    background-color: var(--orange);
    
    .cover_content {
        height: 100%;
        display: flex;

        .socials {
            display: none;
        }

        .mobile_button {
            display: none;
        }

        .cover_infos {
            flex: 1;
            padding: 68px;
            width: fit-content;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .call_to_action {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h1 {
                    font-family: var(--font2);
                    color: #fff;
                    font-size: 82px;
                    margin-bottom: 48px;
                    letter-spacing: 6px;
                    font-weight: normal;
                }
            }

            .socials {
                display: flex;
                gap: 24px;
                align-items: center;

                .icon {
                    font-size: 24px;
                }

                .instagram_icon {
                    font-size: 28px;
                }
            }
        }

        .pizza_illustration_box {
            position: relative;
            height: min(100vh, 900px);
            overflow: hidden;
            flex: 1;

            img {
                position: absolute;
                animation: ${pizza_rotation} 30s linear infinite forwards;
                left: 0;
                position: absolute;
                transform-origin: center;
            }
        }
    }

    @media(max-width: 950px){
        .cover_content {
            .cover_infos {
                width: 100px;
                padding-right: 0;

                .call_to_action {
                    h1 {
                        font-size: 68px;
                    }
                }
            }
        }
    }

    @media(max-width: 768px){
        height: max-content;

        .cover_content {
            flex-direction: column;
            width: 100%;
            height: fit-content;
            padding-bottom: 56px;

            .socials {
                display: flex;
                justify-content: center;
                margin: 80px 0 24px 0;
            }

            .mobile_button {
                display: block;
                margin: 0 auto;
            }

            .cover_infos {
                width: 100%;
                padding: 0;
                padding-top: 84px;
                align-items: center;

                .call_to_action {
                    width: fit-content;
                    align-items: center;

                    h1 {
                        font-size: 16vw;
                        text-align: center;
                    }

                    button {
                        display: none;
                    }
                }

                .socials {
                    display: none;
                }
            }

            .pizza_illustration_box {
                margin-top: -10px;
                align-items: center;
                display: flex;
                justify-content: center;

                img {
                    position: relative;
                    width: 120%;
                }
            }
        }
    }
`;
