import { FiFacebook } from "react-icons/fi";
import { StyledDiv } from "./styles";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export function Socials(){
    return(
        <StyledDiv className="socials">
            <a href="https://www.facebook.com/profile.php?id=100065149172843">
                <FiFacebook className='icon'/>
            </a>
            <a href="https://www.instagram.com/topolinospizzariadelivery/">
                <AiOutlineInstagram className='icon instagram_icon'/>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5548991578035&text&type=phone_number&app_absent=0">
                <BsWhatsapp className='icon'/>
            </a>
        </StyledDiv>
    )
}