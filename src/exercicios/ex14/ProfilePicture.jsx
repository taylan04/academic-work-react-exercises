import styles from "../../styles/ex14.module.css"

export default function ProfilePicture({imagem}) {

    return (
        <>
            <img src={imagem} alt="foto-de-perfil"/>
        </>
    )
}