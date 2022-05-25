import React from 'react'
import * as C from "./styles"
import ResumeIten from '../ResumeItem/ResumeIten'
import{FaRegArrowAltCircleUp,FaRegArrowAltCircleDown,FaDollarSign} from "react-icons/fa"
const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeIten title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeIten title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeIten title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    )
}

export default Resume