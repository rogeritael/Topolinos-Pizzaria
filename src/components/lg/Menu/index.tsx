import { StyledHeader } from "./styles";

import { HiOutlineMenuAlt1 } from 'react-icons/hi';

import logo from '../../../assets/logo.svg';
import cart from '../../../assets/icons/cart.svg'

interface MenuProps {
    setIsMobileMenuOpen: (value: boolean) => void,
    setIsCartOpen: (value: boolean) => void,
}

export function Menu({setIsMobileMenuOpen, setIsCartOpen}: MenuProps){


    return(
        <StyledHeader>
            <HiOutlineMenuAlt1 className='mobile_menu' onClick={() => setIsMobileMenuOpen(true)} />
            <img src={logo} alt="logo da Topolinos delivery" />
            <div className="right_side_container">
                <nav className="menu">
                    <a href="#Salty">Salgadas</a>
                    <a href="#Sweet">Doces</a>
                    <a href="https://api.whatsapp.com/send/?phone=5548991578035&text&type=phone_number&app_absent=0">Contato</a>
                </nav>
                <img src={cart} alt="carrinho de compras" onClick={() => setIsCartOpen(true)} />
            </div>
        </StyledHeader>
    )
}