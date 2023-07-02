import './global.css'

import { useState } from "react"
import { Cover } from "./components/lg/Cover/Cover"
import { Limiter } from "./components/lg/Limiter"
import { Menu } from "./components/lg/Menu"
import { OrderMenu } from "./components/lg/OrderMenu"
import { Footer } from "./components/lg/Footer"
import { Cart } from "./components/lg/Cart"
import { MobileMenu } from "./components/md/MobileMenu"
import { CartProvider } from "./context/CartContext"

import { sweetFlavors } from "./mocks/SweetFlavors"
import { pizzaFlavor } from "./mocks/pizzaFlavor"

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartProvider>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}/>
      <Cart
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      <Cover />
      <Limiter>
        <Menu
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <OrderMenu
          id='Salty'
          title="Pizzas Salgadas"
          pizzas={pizzaFlavor}
        />
        <OrderMenu
          id='Sweet'
          title="Pizzas Doces"
          pizzas={sweetFlavors}
        />
      </Limiter>
      <Footer />
    </CartProvider>
  )
}

export default App
