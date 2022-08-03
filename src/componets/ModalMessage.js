import React from 'react'
import '../Modal.css';

function ModalMessage({ModalMessag, id}) {
 
    const status = (e) => {
        console.log("MODAL  STATUS", e)
        console.log("MODAL  ID", id)
        ModalMessag(e)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button className='titleCloseBtn' onClick={e => status(false)}>X</button>
            <div className='title-model'>
                <h1>"Are You sure You want to delete item with ID: {id}?"</h1>
            </div>
            <div className='body-model'>
                
            </div>
            <div className='footer-model'>
                <button onClick={e => status(true)}>Delete</button>
                <button onClick={e => status(false)} id='cancelBtn'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ModalMessage

/*
<div className='modalBackground'>
        <button className='modalRight' onClick={e => setSt(false)}>X</button>
        <div className='modalContainer'>
            <button className='modalRight' onClick={e => setSt(false)}>X</button>
            <div className='title'>
                <h1>"Are You sure You want to delete item with ID: {id}?"</h1>
            </div>
            <div className='body'>
                
            </div>
            <div className='footer'>
                <button onClick={e => setSt(true)}>Delete</button>
                <button onClick={e => setSt(false)} id='cancelBtn'>Cancel</button>
            </div>
        </div>
    </div>
*/

/*
<div className='overlay'>
        <div className='modalContainer'>
            <div className='modalRight'>
                <p className='closeBtn' onClick={e => setSt(false)}>X</p>
                <div className='content'>
                    <h1>"Are You sure You want to delete item with ID: {id}?"</h1>
                </div>
                <div className='btnContainer'>
                    <button onClick={e => setSt(true)}>Delete</button>
                    <button onClick={e => setSt(false)} id='cancelBtn'>Cancel</button>
                </div>
            </div>
        </div>
        
    </div>
*/