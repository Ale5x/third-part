import React, {useState, useEffect} from 'react'
import product_card from "../data/data-content";
import ModelViewItem from "./ModelViewItem"
import axios from 'axios'


//http://localhost:8080/store/getAllCertificates?size=9&page=${currentPage}

function MainContent() {
    const [items, setItems] = useState(product_card._embedded.giftCertificateDtoList);
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [scrollStatus, setScrollStatus] = useState({top: false, down: false});
    const [scrollTopStatus, setScrollTopStatus] = useState(false);
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

    const goTopBtn = document.getElementById('scrollToTop');
    const goDownBtn = document.getElementById('scrollBack');

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            console.log("setScrollStatus before =>", scrollTopStatus)
            setScrollStatus({...scrollStatus, top: true, down: false})
            console.log("setScrollStatus after =>", scrollTopStatus)
            console.log("SCROLL scrollTopStatus =>", scrollTopStatus)
            setScrollTopStatus(true);
            console.log("After updating =>", scrollTopStatus)
            setFetching(true);
        } 
    }

    const scrollTop = (e) => {
        setScrollPositionY(e.target.documentElement.scrollHeight)
        setScrollStatus({top: false, down: true})
        console.log("SCROLL PositionY =>", scrollPositionY)
        console.log("SCROLL down =>", scrollStatus.down)
        window.scrollTo(0,0);
    }

    const scrollBack = () => {
        window.scrollTo(0, scrollPositionY)

    }

    const acctionViewItem = (e) => {
        console.log("ITEM ID", e.target.value);
        setViewItem(e.target.value);
        console.log("ITEM ", e );
        setOpenModalViewItem(true);
        console.log("setOpenModalViewItem ", openModalViewItem );
    }

    const test = () => {
        console.log("SCROLL STATUS", scrollStatus)
        setScrollPositionY(1000)
       
        console.log("setScrollPositionY", scrollPositionY)
        setScrollStatus({top: false, down: true})
        console.log("SCROLL STATUS", scrollStatus)


    }

  return (
    <div>
        <div className='container-main-page'>
        <div className='container-content'>
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
            <div className='container-items'>
                <div className='item-content' key={item.giftCertificateDtoId}>
                    <button onClick={acctionViewItem} value={item.giftCertificateDtoId}>
                        <img src='https://img.icons8.com/carbon-copy/344/certificate.png' title='Description' alt=''></img>
                    </button>
                    
                    <h3>{item.name}</h3>
                    <h2>Price: {item.price}$</h2>
                    <button className='add-to-cart-btn'>Add to cart</button>
                </div>
                
            </div>
            )}
        </div>
            </div>
           
        </div> 
        </div>
        <div>
            <button type="button" id="scrollToTop" class="scrollTop" onClick={(e) => scrollTop}>scrollTop</button>
            <button type="button" id="scrollBack" class="scrollBack" onClick={scrollBack}>scrollBack</button>
        </div>
        <div>
           {(scrollStatus.top === true) ? (
           <div>
                <button type="button" id="scrollToTop" class="scrollTop" onClick={(e) => scrollTop}>scrollTop</button>
           </div>) : (<button type="button" onClick={test}>TEST</button>)}
        </div>
        <div>
           {(scrollStatus.down === true) ? (<button type="button" id="scrollBack" class="scrollBack" onClick={scrollBack}>scrollBack</button>) : ("1233")}
        </div>
    </div>
    </div>
  )
}

 export default MainContent