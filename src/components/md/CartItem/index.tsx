import { useContext } from "react";

import { StyledDiv } from "./styles";
import { CartContext } from "../../../context/CartContext";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CartItemProps {
    id: number,
    name: string,
    price: number,
    quantity: number,
    image: string
}

export function CartItem({ id, name, price, quantity, image }: CartItemProps){
    const { removeFromCart, increment } = useContext(CartContext)

    return(
        <StyledDiv>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="infos">
                <h3 className="item_name">{name}</h3>
                <span className="item_price">R${price.toFixed(2)}</span>
            </div>
            <div className="controllers">
                <button className="decrement" onClick={() => removeFromCart(id)}>
                    <AiOutlineMinus />
                </button>
                <p className="quantity">
                    x{quantity}
                </p>
                <button className="increment" onClick={() => increment(id)}>
                    <AiOutlinePlus />
                </button>
            </div>
        </StyledDiv>
    )
}