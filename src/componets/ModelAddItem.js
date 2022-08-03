import React, {useState} from 'react'

function ModelAddItem({closeModal, error}) {
    const [details, setDetails] = useState({name: "", tags: "", duration: "", description: "",});

    const addContent = () => {
            console.log("NEW SERTIFICATE", details)
    }


  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='title-color'>
                <p>Add new Certificate</p>
            </div>
            <div className='body-model'>
               <div className='form-group-model'>
                    <b>Name:</b>
                    <br/>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
               </div>
               <div className='form-group-model'>
                    <b>Tags:</b>
                    <br/>
                    <input type="text" name="tags" id="tags" onChange={e => setDetails({...details, tags: e.target.value})} value={details.tags}></input>
               </div>
               <div className='form-group-model'>
                    <b>Duration: </b>
                    <br/>
                    <input type="number" name="duration" id="duration" onChange={e => setDetails({...details, duration: e.target.value})} value={details.duration}></input>
               </div>
               <div className='form-group-model'>
                    <b>Description:</b>
                    <br/>
                    <textarea className='text-content-area' type="text" name="description" id="description" onChange={e => setDetails({...details, description: e.target.value})} value={details.description}></textarea>
               </div>
               
            </div>
            <div className='footer-model'>
                <button onClick={addContent}>Add</button>
                <button onClick={() => closeModal(false)} id='cancelBtn'>Close</button>
            </div>
        </div>
    </div>
  )
}

export default ModelAddItem

/*
modalBackground
modalContainer
body
*/