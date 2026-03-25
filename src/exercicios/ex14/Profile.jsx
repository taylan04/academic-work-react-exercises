import ProfilePicture from "./ProfilePicture"
import UserName from "./UserName"
import UserBio from "./UserBio"

export default function Profile() {

    const eu = {
        nome: "Taylan",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas no Instituto Infnet",
        imagem: "https://i.pinimg.com/236x/ca/7b/60/ca7b60769942c3c1cd2b25627c7ed1bf.jpg"
    }

    return (
        <div>
            <ProfilePicture imagem={eu.imagem}/>
            <UserName nome={eu.nome} />
            <UserBio bio={eu.bio} />
        </div>
    )
}