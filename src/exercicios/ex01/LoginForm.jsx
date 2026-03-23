import BoasVindas from "./BoasVindas"
import styles from "../../styles/ex01.module.css"
import { useState } from "react";

export default function LoginForm() {
    
    //só pra mim não esquecer: criei um objeto usuario direto com useState
    //usei onChange pra salvar o valor do input no nome do objeto, o (e) captura um evento, target se refere ao input e value
    //ao valor
    // onChange: captura o valor digitado no input e atualiza o estado

    const [usuario, setUsuario] = useState({
    nome: "",
    autenticado: false
    });

    function autenticar() {
        setUsuario({
            ///...copia os dados do objeto, aí eu só mudo o que eu quero
            ...usuario,
            autenticado: true 
        })
    }
    
    return (
        <>
        
        <div className={styles.form} style={{ display: usuario.autenticado ? "none" : "flex" }}>
        <h1>Login <i class="fa-regular fa-face-grin-squint fa-lg"></i></h1>
        <input onChange={(e) => setUsuario({...usuario, nome: e.target.value})} type="text" placeholder="Nome de usuário" />
        <input type="password" placeholder="Senha"/>
        <button onClick={autenticar}>Logar</button>
        </div>
        <BoasVindas nome={usuario.nome} autenticado={usuario.autenticado}/>
        </>
    )
}