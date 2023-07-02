import { StyledButton } from "./styles";

export function OrderButton({ className }: {className?: string}){
    return(
        <StyledButton className={className}>
            Fazer pedido
        </StyledButton>
    )
}