import React from "react"
import { ListaItem, ImagemRedonda } from "./styled-card"

const CardMatches = (props) => {
    return(
        <div>
            <ListaItem>
                <ImagemRedonda src={props.photo}/>
                <h2>{props.name}</h2>
            </ListaItem>
        </div>
    )
}

export default CardMatches