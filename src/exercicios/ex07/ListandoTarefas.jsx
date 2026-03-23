export default function ListandoTarefas() {

    return (
        <div>
            <input onChange={(e) => setUsuario({...usuario, nome: e.target.value})} type="text" placeholder="Nome de usuário" />
            <button onClick={autenticar}>Logar</button>
        </div>
    )
}