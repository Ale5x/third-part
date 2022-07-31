import React, {useState} from 'react'
import product_card from '../data/data-content';

 function TestMainContent() {
  console.log("items", product_card)

  const [items, setItems] = useState([])



  const AddNewItems = () => {
    console.log("EVENT ADD_NEW_ITEMS")
    setItems([...items, product_card])
    console.log("ITEMS", items);
  };


  const listItem = items.map((item) => 
  <div className='content'>
    <div key={item.id}>
      <h2>ID: {item.id}</h2>
      <h3>NAME: {item.product_name}</h3>
    </div>

  </div>
  )

  return (
    <div className='main-content'>
      <h1>{items.toString()}</h1>
      {items.map(item => {
        <div className='item' key={item.id}>
            <div>
              <h2>ID: {item.toString}</h2>
            </div>
        </div>
      })}
        <button onClick={AddNewItems}>Add new Content</button>
    </div>
  )
}

/*
   {items.map(item => (
          <div key={item.id}>
            <h2>ID: {item.id}</h2>
            <h3>NAME: {item.product_name}</h3>
          </div>
      
        )
        )}
*/

export default TestMainContent

/*
function TestMainContent() {

  const [items, setItems] = useState([]);

const values = [
  {
    id: 1,
    name: "Rayes Alpha #1"
  },
  {
    id: 3,
    name: "Rayes Alpha #2"
  },
  {
    id: 3,
    name: "Rayes Alpha #3"
  }
]


const AddNewItems = () => {
  setItems([...items, values])
  console.log("ITEMS", items);
};

  return (
    <div>
      <button onClick={AddNewItems}>Add new Content</button>
      <div>
        <ui>
            {items.map(item => (
              <div key={item.id}>
                <h2>{item.name}</h2>
              </div>
            ))}
        
        </ui>
      </div>
    </div>
  )
}

export default TestMainContent
*/
