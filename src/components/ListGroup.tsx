import { useState } from "react";

interface Props {
    items : string[],
    heading: string,
    onSelectedItem : (items:string) => void
}

function ListGroup({items,heading,onSelectedItem}:Props){
    const [selectedItem,setSelectedItem] = useState('');
    return <>
    <h1>{heading}</h1>
    <ul className="list-group">
        {items.length === 0 && <h1>No Items</h1>}
       {items.map((item, index) =><li className={selectedItem === index ? 'list-group-item active':'list-group-item'} key={item} onClick={()=>{setSelectedItem(index); onSelectedItem(item)}}>{item}</li>)}
    </ul>
    </>
}

export default ListGroup;