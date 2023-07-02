import { StyledDiv } from "./styles"

interface SectionTitleProps {
    subtitle: string,
    title: string
}

export function SectionTitle({ subtitle, title }: SectionTitleProps){
    return(
        <StyledDiv>
            <span>{ subtitle }</span>
            <h1>{ title }</h1>
        </StyledDiv>
    )
}