import React, {useState} from 'react'

function Test() {

    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
        console.log("ITEMS", items)
    }

    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ui>
                {items.map( item => (
                  <li key={item.id}>{item.value}</li>  
                ))}
            </ui>    
        </div>
    )
 
}


export default Test
