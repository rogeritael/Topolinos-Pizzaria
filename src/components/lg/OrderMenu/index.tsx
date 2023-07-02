import { PizzaCard } from "../../md/PizzaCard/PizzaCard";
import { SectionTitle } from "../../sm/SectionTitle";
import { Slider } from "../Slider";
import { StyledSection } from "./styles";
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

interface PizzaProps {
    id: number,
    flavor: string,
    ingedients: string,
    price: number,
    image: string
}

interface OrderMenu {
    title: string,
    id: string,
    pizzas: PizzaProps[]
}

export function OrderMenu({ title, pizzas, id }: OrderMenu){

    return(
        <StyledSection id={id}>
            <SectionTitle
                subtitle="cardápio"
                title={title}
            />

            <Slider>
                {pizzas.map((pizza) => (
                    <PizzaCard
                        key={pizza.id}
                        id={pizza.id}
                        image={pizza.image}
                        price={pizza.price}
                        flavor={pizza.flavor}
                        ingredients={pizza.ingedients}
                    />
                ))}
            </Slider>
        </StyledSection>
    )
}