import ListItem from "./ListItem"

export default function DataList({itens}) {

    return (
        <>
        {itens.map((item) => ( 
            <ListItem key={item.id} id={item.id} nome={item.nome} /> ))}
        </>
    )
}