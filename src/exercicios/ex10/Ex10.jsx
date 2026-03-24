import { useState } from "react";

export default function Ex10() {

    const [usuario, setUsuario] = useState('')

    fetch("./data.json")
            .then((resposta) => resposta.json())
            .then((data) => {
                setUsuario(data);
            })

    return (
        <div>
            <div>
                {`Usuário: ${usuario.nome} ${usuario.sobrenome} | Email: ${usuario.email}`}
            </div>
        </div>
    )
}