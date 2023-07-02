import { GrClose } from "react-icons/gr";
import { StyledNav } from "./styles";

interface MobileMenuProps {
    setIsMobileMenuOpen: (param: boolean) => void,
    isMobileMenuOpen: boolean
}

export function MobileMenu({isMobileMenuOpen, setIsMobileMenuOpen}: MobileMenuProps){

    function closeModal(){
        setIsMobileMenuOpen(false)
    }

    return(
        <StyledNav isModalOpen={isMobileMenuOpen}>
            <ul>
                <li>
                    <GrClose onClick={() => closeModal()} />
                </li>
                <li onClick={() => closeModal()}>
                    <a href="#Home">Home</a></li>
                <li onClick={() => closeModal()}>
                    <a href="#Salty">Salgadas</a>
                </li>
                <li onClick={() => closeModal()}>
                    <a href="#Sweet">Doces</a>
                </li>
                <li onClick={() => closeModal()}>
                    <a href="https://api.whatsapp.com/send/?phone=5548991578035&text&type=phone_number&app_absent=0">Contato</a>
                </li>
            </ul>
            
            <span className="background" onClick={() => closeModal()}></span>
        </StyledNav>
    )
}