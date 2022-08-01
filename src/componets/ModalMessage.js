import React from 'react'

function ModalMessage({closeModal}) {
    // console.log("Modal message", message.value)
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={() => closeModal(false)}>X</button>
            <div className='title'>
                <h1>"Are You sure You want to delete item with ID?"</h1>
            </div>
            <div className='body'>
                
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(true)}>Delete</button>
                <button onClick={() => closeModal(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ModalMessage