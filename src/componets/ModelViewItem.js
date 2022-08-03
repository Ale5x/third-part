import React, {useState, useEffect} from 'react'
import axios from 'axios'

function ModelViewItem({id, closeModal}) {
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
      

  
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <div className='body-model'>
            <p>
                <b>ID: </b> <span>{item.giftCertificateDtoId}</span>
            </p>
            <p>
                <b>Name: </b> {item.name}
            </p>
            <p>
                <b>Tags:</b> {item.tags}
            </p>
            <p>
                <b>Price:</b> {item.price}
            </p>
            <p>
                <b>Created:</b> {item.createDate}
            </p>
            <p>
                <b>Duration:</b> {item.duration}
            </p>
            <p>
                <b>Last updated:</b> {item.lastUpdateDate}
            </p>
            <p>
                <b>Description:</b> {item.description}
            </p>

        </div>
        <div className='footer-model'>
            <button onClick={() => closeModal(false)}>Close</button>
        </div>
        </div>
    </div>
  )
}

export default ModelViewItem