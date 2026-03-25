import { useState } from "react";
import DataList from "./DataList";
import styles from "../../styles/ex16.module.css"

export default function Ex16() {

    const [atores, setAtores] = useState([])

    fetch("./atores.json")
        .then((resposta) => resposta.json())
        .then((data) => {
            setAtores(data)})
    
    return (
        <>
        <DataList atores={atores} />
        </>
    )
}