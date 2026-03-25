import Ator from "./Ator";

export default function DataList({atores}) {

    return (
        <div>
        {atores.map((ator,i) => (
            <Ator key={i} imagem={ator.imagem} nome={ator.nome} idade={ator.idade} principal={ator.principal_filme} />
        ))}
        </div>
    )
}