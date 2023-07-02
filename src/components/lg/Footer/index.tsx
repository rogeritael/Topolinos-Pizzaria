import { Socials } from "../../sm/Socials/Socials";
import { StyledFooter } from "./styles";

export function Footer(){
    return(
        <StyledFooter>
            <p>Vila Santa Catarina, São João do Sul - SC</p>
            <p>(48) 99157-8035</p>
            <Socials />
        </StyledFooter>
    )
}