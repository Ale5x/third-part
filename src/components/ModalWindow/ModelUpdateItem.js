import React, {useState, useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'

function ModelUpdateItem({id, closeModal, status, message}) {
    const navigate = useNavigate();
    const [details, setDetails] = useState({name: "", tags: "", duration: "", description: "",});

    const [item, setItem] = useState({giftCertificateDtoId: "", 
                                      name: "", 
                                      price: "", 
                                      tags: "", 
                                      duration: "", 
                                      createDate: "", 
                                      lastUpdateDate: "", 
                                      description: ""});
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState("");

    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem("access_token")
  };

      useEffect(() => {
        if(fetching) {
          axios.get(`http://localhost:8080/store/certificate/get?id=${id}`)
            .then(response => {
              if(response.status == 200) {
                setItem({
                  giftCertificateDtoId: response.data.giftCertificateDtoId,
                  name: response.data.name,
                  tags: response.data.tags,
                  duration: response.data.duration,
                  createDate: response.data.createDate,
                  lastUpdateDate: response.data.lastUpdateDate,
                  description: response.data.description
                })
              } else {
                setError("Error message")
              }
          })
            .finally(() => 
              setFetching(false));
         }
      })


    const updateContent = () => {
      axios.post("http://localhost:8080/store/certificate/update", {
        giftCertificateDtoId: item.giftCertificateDtoId, 
        name: details.name,
        tags: details.tags,
        price: details.price,
        duration: details.duration,
        description: details.description
      }, 
        {headers}
      )
      .then(response => {
        if(response.status === 200){
          message(`The certificate with ID:${id} was updated successfully!`);
          closeModal(false);
        }
      })
      .catch(error => {
        if(error.response.status === 400) {
          setError(error.response.data.message);
        } else if(error.response.status === 403) {
          navigate("/error-page-403")
        } else {
          navigate("/error-page-server")
        }
        })
      .finally(() => {
        status(true);
      })
        closeModal(false);
        status(true);
}

  return (
    <div className='modalBackground-update'>
        <div className='modalContainer-update'>
            <div className='form-modal-edit'>
            <div className='title-color'>
                <p>Update Certificate</p>
            </div>
            <div className='error-message'>
                <h3>
                    {
                        (error != "") ? (error) : ("")
                    } 
                </h3>
            </div>
            <div className='body-model'>
            <div className='.container-for-update'>
              <div className='form-group-model'><b>ID:</b>{item.giftCertificateDtoId} </div>
              <hr/>
               <div className='form-group-model'>
                    <b>Name:</b>{item.name}
                    <br/>
                   <span>
                        <b>New value:</b>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                    </span>
               </div>
               <hr/>
               <div className='form-group-model'>
                    <b>Tags:</b> {item.tags}
                    <br/>
                    <span>
                        <b>New value:</b>
                        <input type="text" name="tags" id="tags" onChange={e => setDetails({...details, tags: e.target.value})} value={details.tags}></input>
                    </span>
                    
               </div>
               <hr/>
               <div className='form-group-model'>
                    <b>Price:</b>{item.price}
                    <br/>
                    <span>
                        <b>New value:</b>
                        <input type="number" min="0.1" name="number" id="number" onChange={e => setDetails({...details, price: e.target.value})} value={details.price}></input>
                    </span>
                    
               </div>
               <hr/>
               <div className='form-group-model'>
                    <b>Duration: </b>{item.duration}
                    <br/>
                    <span>
                        <b>New value:</b>
                        <input type="number" min="1" name="duration" id="duration" onChange={e => setDetails({...details, duration: e.target.value})} value={details.duration}></input>
                    </span>
                    
               </div>
               <hr/>
               <div className='form-group-model'>
                    <b>Description:</b>{item.description}
                    <br/>
                    <span>
                        <b>New value:</b>
                        <textarea className='text-content-area' type="text" name="description" id="description" onChange={e => setDetails({...details, description: e.target.value})} value={details.description}></textarea>
                    </span>
                    
                    </div>
                    <div className='footer-model'>
                        <button onClick={updateContent}>Update</button>
                        <button onClick={() => closeModal(false)} id='cancelBtn'>Close</button>
                    </div>
                </div>
            
            </div>
            </div>
            <div>
                <span className='footer-for-padding'></span>
            </div>
            </div>
    </div>
  )
  
}

export default ModelUpdateItem