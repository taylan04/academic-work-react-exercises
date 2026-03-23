import styles from "../../styles/ex03.module.css"

export default function Pessoa({dados}) {

    return (
        <>
        <div className={styles.pessoa}>
        <p>Nome: {dados.nome}</p>
        <p>Idade: {dados.idade}</p>
        <p>Cidade: {dados.cidade}</p>
        </div>
        <p className={styles.mensagem}>{dados.idade < 18 ? "Alerta: você não possui idade maior que 18 anos, se retire!" : null}</p>
        </>
    )
}