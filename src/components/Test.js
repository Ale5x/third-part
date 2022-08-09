import React, {useState } from 'react'
import { NavLink } from 'react-router-dom'
import ModelViewItem from './ModalWindow/ModelViewItem';
import { useNavigate  } from 'react-router-dom';


function Test() {

    console.log("MODULE TEST")
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
const navigate = useNavigate();
const LoginOut= () => {
    console.log("DELETE ROLES")
    localStorage.clear()
    console.log("ROLES ->", localStorage.getItem("roles"))
    
}

const Login= () => {
    console.log("SET ROLES")
    localStorage.setItem("roles", "[ADMIN]")
    console.log("Login ROLES ->", localStorage.getItem("roles"))
    navigate("/test2");
}

const [openModalViewItem, setOpenModalViewItem] = useState(false);


  return (
    <div>
        <div>
            {openModalViewItem && <ModelViewItem id={5} status={setOpenModalViewItem}/>}
        </div>
            {/* <NavLink to={'tt?get=5'}> */}
            <button onClick={() => setOpenModalViewItem(true)}>
                ADD
            </button>
        {/* </NavLink> */}

        <button><img src='https://cdn-icons.flaticon.com/png/512/3741/premium/3741570.png?token=exp=1660038802~hmac=3c42fed261df851ee78c60c55d9eeac1'></img></button>
        <button><img src='https://cdn-icons.flaticon.com/png/512/3741/premium/3741369.png?token=exp=1660038803~hmac=4ae5e6cefd3457ace216f4f731b93dbc'></img></button> 



        <button><img src='https://cdn-icons-png.flaticon.com/512/724/724927.png' className='btn-navigation'></img></button>

        <button><img src='https://cdn-icons-png.flaticon.com/512/44/44887.png'></img></button>
        <button><img src='https://cdn-icons-png.flaticon.com/512/7940/7940371.png'></img></button> 

        <button><img src='https://cdn-icons-png.flaticon.com/512/271/271220.png'></img></button> 
        <button><img src='https://cdn-icons-png.flaticon.com/512/271/271228.png'></img></button> 


        <button><img src='https://cdn-icons-png.flaticon.com/512/32/32766.png'></img></button> 
        <button><img src='https://cdn-icons-png.flaticon.com/512/8020/8020019.png'></img></button> 
        {/* className='btn-navigation' */}


<button>GO TO ERROR</button>

<img className='error-content-img' src='src\data\1.jpg'></img>

<button onClick={Login}>LOGIN</button>
<button onClick={LoginOut}>LOGIN OUT</button>
    </div>
  )
}

export default Test