import { Limiter } from "../Limiter";
import { StyledSection } from "./styles";

import pizza from '../../../assets/pizza_draw.svg';

import { Socials } from "../../sm/Socials/Socials";
import { OrderButton } from "../../sm/OrderButton";



export function Cover(){
    return(
        <StyledSection id='Home'>
            <Limiter>
                <div className="cover_content">
                    <div className="cover_infos">
                        <div className="call_to_action">
                            <h1>Topolinos <br/> Delivery</h1>
                            <OrderButton />
                        </div>
                        <Socials />
                    </div>
                    <figure className="pizza_illustration_box">
                        <img src={pizza} alt="ilustração de pizza" />
                    </figure>
                    <Socials />
                    <OrderButton className='mobile_button' />
                </div>
            </Limiter>
        </StyledSection>
    )
}