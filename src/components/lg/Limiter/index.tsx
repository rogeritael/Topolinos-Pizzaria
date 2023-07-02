import { StyledSection } from "./styles";

export function Limiter({ children }: { children: React.ReactNode }){
    return(
        <StyledSection className="limiter">
            { children }
        </StyledSection>
    )
}