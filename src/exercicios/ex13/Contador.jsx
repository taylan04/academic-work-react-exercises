import { useState } from "react"

export default function Contador() {

    const [cliques, setCliques] = useState(0)

    function contabilizarClique() {
        setCliques(cliques + 1)
    }

    return (
        <div>
            <button onClick={contabilizarClique}>Cliques</button>
            <p>{cliques}</p>
        </div>
    )
}