import React from 'react'
import product_card from "../data/data-content";

const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) => 
        <div className='card' key={item.id}>
            <div className='card_img'>
                <img src={item.thumb}></img>
            </div>
            <div className='card_header'>
                <h3>{item.product_name}</h3>
                <p>{item.description}</p>
                <p className='price'>{item.price}<span>{item.currency}</span></p>
                <div className='btn'>Add to cart</div>
            </div>
        </div>
        
    );

    return (
        <div className='main-content'>
            <h3>Orenges</h3>
            {listItems}
        </div>
    )
 }

export default MainContent;