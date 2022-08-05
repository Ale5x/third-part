import React, {useState, useEffect} from 'react'
import product_card from "../data/data-content";
import ModelViewItem from "./ModelViewItem"
import axios from 'axios'



function MainContent() {
    const [items, setItems] = useState(product_card._embedded.giftCertificateDtoList);
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [scrollStatus, setScrollStatus] = useState({top: false, down: false});
    const [openModalViewItem, setOpenModalViewItem] = useState(false);
    const [viewItem, setViewItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageForName, setCurrentPageForName] = useState(1);
    const [fetching, setFetching] = useState(true);

    const [nameValue, setSeacrhValue] = useState("");
    
    const searchByName = (e) => {
        setItems([])
        setSeacrhValue(e.target.value);
        setCurrentPageForName(1);
        setCurrentPage(1);
        setFetching(true)
    }

    useEffect(() => {
        if(fetching) {
        //    if(nameValue !== "") {
        //     axios.get(`http://localhost:8080/store/certificate/getCertificatesByPartName?size=10&page=${currentPageForName}&name=${nameValue}`)
        //     .then(response => {
        //         setItems([...items, ...response.data._embedded.giftCertificateDtoList]);
        //         currentPageForName(currentPageForName => currentPageForName + 1);
        //         // setTotalCount(response.headers(['x-total-count']))       
        //         console.log("LIST EMPTY", response.data._embedded.giftCertificateDtoList)         
        //     })
        //     .finally(() => 
        //     setFetching(false));
        //    } else {
        //     axios.get(`http://localhost:8080/store/certificate/getAllCertificates?size=10&page=${currentPage}`)
        //     .then(response => {
        //         setItems([...items, ...response.data._embedded.giftCertificateDtoList]);
        //         setCurrentPage(currentPage => currentPage + 1);
        //         // setTotalCount(response.headers(['x-total-count']))                
        //     })
        //     .finally(() => 
        //     setFetching(false));
        //    }
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        //e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        if(window.scrollY < 300) {
            setFetching(true);
        }

        setScrollStatus({...scrollStatus, top: true, down: true})
    }

    const scrollTop = () => {
        setScrollPositionY(window.scrollY)
        window.scrollTo(0,0);
    }

    const scrollBack = () => {
        window.scrollTo(0, scrollPositionY)

    }

    const acctionViewItem = (e) => {
        setViewItem(e.target.value);
        setOpenModalViewItem(true);
    }


  return (
    <div>
        <div className='container-main-page'>
            <div >
                <div>
                    {openModalViewItem && <ModelViewItem id={viewItem} closeModal={setOpenModalViewItem}/>}
                </div>
            <div> 
        <div className='search-function-main-page'>
            <input type='search' placeholder='Enter name' onChange={searchByName}></input>
        </div>
        <div className='container-content-items'>
        {items.map(item => 
            <div className='item-content' key={item.giftCertificateDtoId}>
                <button onClick={acctionViewItem} value={item.giftCertificateDtoId}>
                    <img src='https://img.icons8.com/carbon-copy/344/certificate.png' title='Description' alt=''></img>
                </button>
            
                <h3>{item.name}</h3>
                <h2>Price: {item.price}$</h2>
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
            )}
        </div>
            </div>
           
        </div> 
        </div>
        <div>
           {(window.scrollY > 200) ? (
            <div className='scrollTop'>
                <img src='https://img.icons8.com/ios-filled/344/long-arrow-up.png' title='Up' class="scrollTop" alt='' onClick={scrollTop}></img>
             </div>
           ) : ("")}
        </div>
        <div>
           {(window.scrollY < 200 && scrollPositionY !== 0) ? (
           <div className='scrollBack'>
                <img src='https://img.icons8.com/ios-filled/344/long-arrow-down.png' title='Down' class="scrollBack" alt='' onClick={scrollBack}></img>
            </div>
           ) : ("")}
        </div>
    </div>
  )
}

 export default MainContent