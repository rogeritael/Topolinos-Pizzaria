import { useState, useContext } from "react";

import { CartItem } from "../../md/CartItem";
import { StyledDiv } from "./styles";
import { CartContext } from "../../../context/CartContext";

import { GrClose } from 'react-icons/gr';
import { AiOutlineCreditCard } from "react-icons/ai";
import { MdPix, MdAttachMoney } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

interface CartProps {
    setIsCartOpen: (parameter: boolean) => void,
    isCartOpen: boolean
}

export function Cart({ setIsCartOpen, isCartOpen }: CartProps){
    const { cartItems, totalCart } = useContext(CartContext)
    const [paymentMethod, setPaymentMethod] = useState('cartao') 
    const [cartStep, setCartStep] = useState(1);

    function handleSetStep(){

        if(cartStep === 1){
            if(cartItems.length > 0)
                setCartStep(2)

        } else if(cartStep === 2){
            //gera mensagem
            const message = `
            Olá, gostaria de confirmar meu pedido:\n\n
            
            ${cartItems.map((pizza) => (' ' + pizza.item.name + ` x${pizza.quantity}`))}
    
            Valor: R$ ${totalCart.toFixed(2)}\n\n
    
            Método de pagamento: ${paymentMethod}
        `

            //envia para o whatsapp
            window.location.href = `https://wa.me/991764550?text=${encodeURIComponent(message)}`
        }
    }

    return(
        <StyledDiv isCartOpen={isCartOpen}>
            <span className="background" onClick={() => setIsCartOpen(false)}/>

            <div className="cart">
                <div className="header">
                    <h1>{cartStep === 1 ? 'Carrinho' : 'Pagamento'}</h1>
                    <GrClose onClick={() => setIsCartOpen(false)} />
                </div>

                {/* PASSO 1 - Carrinho com os itens adicionados pelo usuário */}
                { cartStep === 1 && (
                    <div className="cart_items">
                        <div className="items_rail">
                            {cartItems.map(cartItem => (
                                <CartItem
                                    key={cartItem.item.id}
                                    id={cartItem.item.id}
                                    image={cartItem.item.image}
                                    name={cartItem.item.name}
                                    price={cartItem.item.value}
                                    quantity={cartItem.quantity}
                                />
                            ))}    
                        </div>
                        <div className="total">
                                <h3>Total</h3>
                                <p>R${totalCart.toFixed(2)}</p>
                            </div>
                    </div>
                )}

                {/* PASSO 2 - Escolher forma de pagamento */}
                { cartStep === 2 && (
                    <>
                    <p className="payment_title">Escolha um método de pagamento</p>
                    <ul className="payment_method">
                        <li className={paymentMethod === 'cartao' ? 'active' : ''} onClick={() => setPaymentMethod('cartao')}>
                            <span className="check"></span>
                            <p className="method">Cartão</p>
                            <AiOutlineCreditCard />
                        </li>
                        <li className={paymentMethod === 'pix' ? 'active' : ''} onClick={() => setPaymentMethod('pix')}>
                            <span className="check"></span>
                            <p className="method">Pix</p>
                            <MdPix />
                        </li>
                        <li className={paymentMethod === 'dinheiro' ? 'active' : ''} onClick={() => setPaymentMethod('dinheiro')}>
                            <span className="check"></span>
                            <p className="method">Dinheiro</p>
                            <MdAttachMoney />
                        </li>
                        <li onClick={() => setCartStep(1)}>
                            <BsArrowLeft /> voltar
                        </li>
                    </ul>
                    </>
                )}
                
                <div className="cart_footer">
                    <button onClick={() => handleSetStep()}>
                        {cartStep === 1 ? 'Pagamento' : 'Finalizar Pedido'}
                    </button>
                </div>
            </div>
        </StyledDiv>
    )
}