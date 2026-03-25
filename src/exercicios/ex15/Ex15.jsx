import { useState } from "react";
import ItemList from "./ItemList"
import styles from "../../styles/ex15.module.css"

export default function Ex15() {

    const lista = [
        { id: 1, nome: "Carregador portátil" },
        { id: 2, nome: "Peça de lego" },
        { id: 3, nome: "Binóculos" },
        { id: 4, nome: "Camisa esportiva" },
        { id: 5, nome: "(???)" }
    ];

    const [itens, setItens] = useState(lista);
    const [novoNome, setNovoNome] = useState("");
    const [filtro, setFiltro] = useState("");

    function proximoId() {
    const ids = itens.map((item) => item.id);
    return Math.max(...ids) + 1;
    }

    function adicionar() {

    if (!novoNome) return;

    const novoItem = {
        id: proximoId(),
        nome: novoNome
    }

    setItens([...itens, novoItem])
    }

    function itensFiltrados() {
        return itens.filter((item) => item.nome.toLowerCase().trim().includes(filtro.toLowerCase().trim()));
    }
    

    return (
        <>
        <div className={styles.itens}>
            <ItemList itens={itensFiltrados()} />
        </div>
        <div className={styles.form}>
            <input type="text" onChange={(e) => setFiltro(e.target.value)} placeholder="Pesquisar Item"/>
            <p><strong>Adicionar Item</strong></p>
            <input type="text" onChange={(e) => setNovoNome(e.target.value)} placeholder="Nome do Item" />
            <button onClick={adicionar}>Adicionar Item</button>
        </div>
        </>
    )
}