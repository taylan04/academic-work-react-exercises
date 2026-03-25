import ListItem from "./ListItem"
import styles from "../../styles/ex12.module.css"

export default function DataList({itens}) {

    return (
        <div className={styles.itens}>
        {itens.map((item) => ( 
            <ListItem key={item.id} id={item.id} nome={item.nome} /> ))}
        </div>
    )
}