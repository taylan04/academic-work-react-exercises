import styles from "../../styles/ex06.module.css"

export default function Time({time}) {
    return (
        <>
            <div className={styles.time}>
                <img src={time.imagem}/>
                <div className={styles.info}>
                    <p>{time.nome}</p>
                    <p>{time.cidade}</p>
                    <p>{time.estadio}</p>
                </div>
                
            </div>
        </>
    )
}