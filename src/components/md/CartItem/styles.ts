import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    figure {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #ccc;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        } 
    }

    .infos {
        flex: 1;
        margin-left: 14px;

        .item_name, .item_price {
            font-size: 14px;
        }

        .item_price {
            color: #d3d3d3;
            font-weight: bold;
        }
    }

    .controllers {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-left: 4px;

        .decrement, .increment {
            font-size: 10px;
            padding: 10px;
            border-radius: 6px;
        }

        .increment {
            background-color: var(--yellow);
        }

        .quantity {
            font-size: 12px;
        }
    }

    @media(max-width: 425px){
        figure {
            width: 48px;
            height: 48px;
        }

        .infos {
            flex: 1;
            padding-left: 8px;
            
            .item_name, .item_price {
                text-align: left;
            }
        }

        .controllers {
            gap: 8px;

            .increment, .decrement {
                font-size: 10px;
                padding: 10px;
                border-radius: 6px;
            }

            .quantity {
                font-size: 10px;
            }
        }
    }
`;