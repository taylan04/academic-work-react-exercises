export default function BoasVindas({nome, autenticado}) {
    let mensagem = `Bem vindo, ${nome}`

    return (
        <>
        <p>{autenticado ? mensagem : "Faça login!"}</p>
        </>
    )
}