import { useState } from "react";
import DataList from "./DataList";

export default function Ex16() {

    const [atores, setAtores] = useState([])

    fetch("./atores.json")
        .then((resposta) => resposta.json())
        .then((data) => {
            setAtores(data)})
    
    return (
        <div>
        <DataList atores={atores} />
        </div>
    )
}