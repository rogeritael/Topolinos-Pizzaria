import { useContext, useState } from 'react'

import { StyledArticle } from "./styles";
import { CartContext } from "../../../context/CartContext";

interface PizzaCardProps {
    id: number,
    flavor: string,
    ingredients: string,
    price: number,
    image: string,
}

export function PizzaCard({ id, flavor, ingredients, price, image }: PizzaCardProps){
    const { addToCart } = useContext(CartContext)
    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(true)
        addToCart(id)

        setTimeout(() => {
            setIsClicked(false)
        }, 1500)
    }

    return(
        <StyledArticle>
            <figure>
                <img src={image} alt={flavor} />
            </figure>
            <h2>{ flavor }</h2>
            <p>
                { ingredients }
            </p>
            <span>
                R$ {price.toFixed(2).replace('.', ',')}
            </span>
            <button className={isClicked ? 'clicked' : ''} onClick={() => handleClick()}> <p> Adicionar ao Carrinho</p></button>
        </StyledArticle>
    )
}