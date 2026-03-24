import { useState } from "react"
import Time from "./Time"
import styles from "../../styles/ex06.module.css"

export default function ListaTimes() {

    const [times, setTimes] = useState([])
    const [carregado, setCarregado] = useState(false)

    async function carregar() {
        
        const resposta = await fetch("./times.json")
        // esse { data } é destruturação e pega só o data da resposta do fetch
        const data = await resposta.json();
        setTimes(data);
        setCarregado(true)
    } 

    return (
        <div>
        <button className={styles.button} onClick={carregar}><i className="fa-regular fa-circle-right fa-lg"></i> ver times</button>
        <div className={styles.times}>
        {carregado ? times.map((time, i) => <Time time={time}/>) : null}
        </div>
        </div>
    )
}