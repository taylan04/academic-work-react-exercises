export default function Ator({imagem, nome, idade, principal}) {

    return (
        <div>
            <img src={imagem} alt="foto-do-ator"/>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{principal}</p>
        </div>
    )
}