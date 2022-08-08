import React, {useState, useEffect, useParams} from 'react'
import { useNavigate  } from 'react-router-dom';



function TestModel() {

    console.log("URL", window.location.href )
    console.log("URL PARAMS", new URLSearchParams(window.location.href).get('get') )

    const navigate = useNavigate();
    const [details, setDetails] = useState({name: "", tags: "", duration: "", description: "",});

    const [item, setItem] = useState({giftCertificateDtoId: "1", 
                                    //   name: "Калькулятор переводит значение угла, заданного в виде градусов, минут и секунд в градусы, выраженные десятичной дробью и обратно из десятичной", 
                                    name: "По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, 1212",  
                                    price: "12", 
                                    //   tags: "Калькулятор переводит значение угла, заданного", 
                                    tags: "По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, 1212 По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, 1212"  ,
                                    duration: "15", 
                                      createDate: "08.08.2022T15:15:23", 
                                      lastUpdateDate: "09.08.2022T15:15:23", 
                                      description: "По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, 1212"
                                      //   description: "По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, который переводит значение угла, выраженное в градусах с десятичной дробью в градусы минуты и секунды В качестве значения угла по умолчанию будем использовать текущий угол наклона Пизанской башни (3.97°). По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, который переводит значение По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, который переводит значение 555 По запросу пользователя Перевод градусов из десятичной дроби в часы, минуты, секунды и обратно создаем калькулятор, который переводит значение 777" 
                                    });
                                      const [fetching, setFetching] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        //e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        }

    }

    const close = () => {
        console.log("PAGE CLOSE")
        // status(false);
    }

  return (
    <div><div className='modalBackground'>
    <div className='modalContainer'>
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
                    <button>Update</button>
                    <button id='cancelBtn' onChange={close}>Close</button>
                </div>
            </div>
           
        </div>
        </div>
        <div>
            <span className='footer-for-padding'></span>
        </div>
    </div>
</div></div>
  )
}

export default TestModel