import React, {useEffect} from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';


function ModalMessage({message, closeModal, id, status}) {
    const navigate = useNavigate();
    const headers = { 
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':true,
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("access_token")
    };

    const deleteItem = () => {
        console.log("Starting deleting")
        axios.delete(`http://localhost:8080/store/certificate/delete?id=${id}`, 
            {headers}
            )
        .then(response => {
            if(response.status === 200){
                message(`The certificate with ${id} was deleted successfully!`);
            }
        })
        .catch(error => {
            console.log("error", error)
            if(error.response.status === 400) {
                message(`Error while deleting certificate ID:${id}` + error.response.data.message);
                // setError(error.response.data.message);
            } else {
                navigate("/error-page-server");
            }
        })
        .finally(() => {
            status(true);
            closeModal(false);
        })
    }



  return (
    <div className='form-modal-message'>
        <div className='modalBackground'>
        <div className='modalContainer'>
            <button className='titleCloseBtn' onClick={e => closeModal(false)}>X</button>
            <div className='body-model'>
                <h1>"Are You sure You want to delete item with ID: {id}?"</h1>
            </div>
            <div className='footer-model'>
                <button onClick={deleteItem}>Delete</button>
                <button onClick={e => closeModal(false)} id='cancelBtn'>Cancel</button>
            </div>
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