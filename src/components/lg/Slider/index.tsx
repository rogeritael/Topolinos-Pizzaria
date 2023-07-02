import { StyledDiv } from "./styles";
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from "react";

export function Slider({ children }: { children: React.ReactNode }){
    const [ width, setWidth ] = useState(0)
    const carousel = useRef<any>()

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return(
        <StyledDiv
            ref={carousel}
            className="slider"
        >
            <motion.div  drag="x" whileTap={{ cursor: "grabbing" }} dragConstraints={{ right: 0, left: - width }} className="rail">
                {children}
            </motion.div>
        </StyledDiv>
    )
}