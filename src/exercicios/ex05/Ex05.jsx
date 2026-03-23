import Lista from "./Lista"

export default function Ex05() {

    const exibirLista = true
    const itens = ["Item 1", "Item 2", "Item 3"]

    return (
        <div>
            {exibirLista ? <Lista lista={itens} /> : "Lista oculta."}
        </div>
    )
}