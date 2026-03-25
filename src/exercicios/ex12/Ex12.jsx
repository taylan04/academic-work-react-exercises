import { useState } from "react";
import DataList from "./DataList";

export default function Ex12() {

    const lista = [
        { id: 1, nome: "Carregador portátil" },
        { id: 2, nome: "Peça de lego" },
        { id: 3, nome: "Binóculos" },
        { id: 4, nome: "Camisa esportiva" },
        { id: 5, nome: "(???)" }
    ];

    const [itens, setItens] = useState(lista);

    function buscarItem(nome) {

        const listaItens = nome.length > 0 ? lista.filter((item) => item.nome.toLowerCase().includes(nome.toLowerCase())) : lista;

        setItens(listaItens);
    }

    return (
        <div>
            <input type="text" onChange={(e) => buscarItem(e.target.value)} placeholder="Item"/>
            <DataList itens={itens} />
        </div>
    )
}