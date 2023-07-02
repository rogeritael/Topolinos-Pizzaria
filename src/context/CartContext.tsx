import { createContext, useEffect, useState } from 'react';
import { pizzaFlavor as salty } from '../mocks/pizzaFlavor';
import { sweetFlavors as sweet } from '../mocks/SweetFlavors';

interface ItemProps {
    id: number,
    name: string,
    value: number,
    image: string
}

interface cartItemProps {
    item: ItemProps,
    quantity: number
}

interface ContextProps {
    cartItems: cartItemProps[],
    addToCart: (id: number) => void,
    increment: (id: number) => void,
    removeFromCart: (id: number) => void,
    totalCart: number,
}

export const CartContext = createContext({} as ContextProps)

export function CartProvider({ children }: {children: React.ReactNode}){
    const [cartItems, setCartItems] = useState<cartItemProps[]>([]);
    const items = salty.concat(sweet)
    
    useEffect(() => {
        const storedPizzas = localStorage.getItem('pizzas')

        if(storedPizzas)
            setCartItems(JSON.parse(storedPizzas))
    }, [])
    
    const totalCart = cartItems.reduce((total, current) => {
        return total + (current.item.value * current.quantity)
    }, 0)
    
    // ADICIONAR AO CARRINHO
    function addToCart(id: number){

        const findItem = items.find(item => item.id === id);
        const isAlreadyAdded = cartItems.find(item => item.item.id === id)

        //se já estiver no carrinho
        if(isAlreadyAdded){
            const updatedCart = cartItems.map((cart) => {
                if(cart.item.id === id)({
                    ...cart, quantity: cart.quantity++
                });

                return cart
            })

            setCartItems(updatedCart);
            localStorage.setItem('pizzas' ,JSON.stringify(updatedCart))
            return
        }

        //se ainda não foi adicionado no carrinho
        const itemValues = {
            id: findItem!.id,
            image: findItem!.image,
            name: findItem!.flavor,
            value: findItem!.price
        }

        const cartItem: cartItemProps = {
            item: itemValues, quantity: 1
        }

        const updatedCart = [...cartItems, cartItem];

        setCartItems(updatedCart)
        localStorage.setItem('pizzas' ,JSON.stringify(updatedCart))
    }

    // INCREMENTAR ITEM
    function increment(id: number){
        const updatedCart = cartItems.map((cart) => {
            if(cart.item.id === id)({
                ...cart, quantity: cart.quantity++
            });

            return cart
        })

        setCartItems(updatedCart);
        localStorage.setItem('pizzas' ,JSON.stringify(updatedCart))
    }

    // REMOVER DO CARRINHO
    function removeFromCart(id: number){
        const isAlreadyAdded = cartItems.find(
            (cart) => cart.item.id === id
        );

        if(isAlreadyAdded!.quantity > 1){
            const updatedCart = cartItems.map((cart) => {
                if(cart.item.id === id)({
                    ...cart, quantity: cart.quantity--
                });

                return cart
            })

            setCartItems(updatedCart);
            localStorage.setItem('pizzas' ,JSON.stringify(updatedCart))
            return;
        }

        //se tiver apenas um item no carrinho
        const updatedCart = cartItems.filter(cart => cart.item.id !== id);
        setCartItems(updatedCart)
        localStorage.setItem('pizzas' ,JSON.stringify(updatedCart))
    }

    // RETURNS
    return(
        <CartContext.Provider
            value={{ 
                cartItems, 
                addToCart, 
                removeFromCart, 
                increment, 
                totalCart
            }}>
            {children}
        </CartContext.Provider>
    )

}