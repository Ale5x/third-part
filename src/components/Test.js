import React, {useState } from 'react'
import { NavLink } from 'react-router-dom'
import ModelViewItem from './ModelViewItem';


function Test() {
    /*
    
    And You need to minus countItemsInPage to get a start position
    let countInServer = 120;
    let countItemsInPage = 50;
    let page = 1;
    let pageT = 0;
    while((page * countItemsInPage) <= countInServer) {
        page++;
        console.log("PAGE - >", page)
    }
    page--;
    console.log("PAGE FINAL- >", page)
*/

const [openModalViewItem, setOpenModalViewItem] = useState(false);


  return (
    <div>
        <div>
            {openModalViewItem && <ModelViewItem id={5} status={setOpenModalViewItem}/>}
        </div>
            <NavLink to={'tt?get=5'}>
            <button onClick={() => setOpenModalViewItem(true)}>
                ADD
            </button>
        </NavLink>
    </div>
  )
}

export default Test