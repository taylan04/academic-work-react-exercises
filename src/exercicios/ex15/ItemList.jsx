import ListItem from "../ex12/ListItem"

export default function ItemList({itens}) {
    return (
        <>
        {itens.map((item) => ( 
            <ListItem key={item.id} id={item.id} nome={item.nome} /> ))}
        </>
    )
}