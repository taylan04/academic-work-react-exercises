export default function ExibindoNomes({nomes}) {

    return (
        <>
        <ul>
            {nomes.map((nome, i) => (<li key={i}>{nome}</li>))}
        </ul>
        </>
    )
}