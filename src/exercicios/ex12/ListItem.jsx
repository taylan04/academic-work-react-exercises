import styles from "../../styles/ex12.module.css"

export default function ListItem({id, nome}) {

    return (
        <div className={styles.item}>
            <p>Item ID: {id}</p>
            <p>{nome}</p>
        </div>
    )
}