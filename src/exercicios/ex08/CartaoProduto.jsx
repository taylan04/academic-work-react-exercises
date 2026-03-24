import FotoDoProduto from "./FotoDoProduto"
import TextoDoProduto from "./TextoDoProduto"
import styles from "../../styles/ex08.module.css"

export default function CartaoProduto() {

    const produto = {
        "imagem": "https://imgnike-a.akamaihd.net/768x768/09761715A3.jpg",
        "nome": "Camisa Brasil Jordan II 2026/27 Torcedor Pro Masculina",
        "descricao": "Essa camisa de cores vibrantes é tão bonita quanto ameaçadora. Como um sapo-flecha venenoso alertando seus predadores, esta camisa Jordan lembra às outras nações que enfrentar o Brasil é por sua própria conta e risco.",
        "preco": 450
    }

    return (
        <div className={styles.card}>
        <span className={styles.detalhe}></span>
        <FotoDoProduto imagem={produto.imagem}/>
        <TextoDoProduto {...produto} /> 
        </div>
    )
}