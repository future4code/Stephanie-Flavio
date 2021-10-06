import React from "react"
import { ListaItem, ImagemRedonda } from "./styled-card"

const CardMatches = () => {
    return(
        <ListaItem>
            <ImagemRedonda src={"https://picsum.photos/50/50"}/>
            <h2>Nome Pessoa</h2>
        </ListaItem>
    )
}

export default CardMatches