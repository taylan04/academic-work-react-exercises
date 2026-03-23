import { useState } from "react"
import Pessoa from "./Pessoa"

export default function Ex03() {

    const dados = {
        nome: "Taylan",
        idade: 17,
        cidade: "Rio de Janeiro"
    }

    return (
        <div>
        <Pessoa dados={dados}/>
        </div>
    )
}