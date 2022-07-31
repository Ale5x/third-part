import React, {useState, useEffect} from 'react'
import product_card from "../data/data-content";
import axios from 'axios'

//http://localhost:8080/store/getAllCertificates?size=9&page=${currentPage}

function MainContent() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageForName, setCurrentPageForName] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0)
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
           if(nameValue !== "") {
            axios.get(`http://localhost:8080/store/certificate/getCertificatesByPartName?size=10&page=${currentPageForName}&name=${nameValue}`)
            .then(response => {
                setItems([...items, ...response.data._embedded.giftCertificateDtoList]);
                currentPageForName(currentPageForName => currentPageForName + 1);
                // setTotalCount(response.headers(['x-total-count']))       
                console.log("LIST EMPTY", response.data._embedded.giftCertificateDtoList)         
            })
            .finally(() => 
            setFetching(false));
           } else {
            axios.get(`http://localhost:8080/store/certificate/getAllCertificates?size=10&page=${currentPage}`)
            .then(response => {
                setItems([...items, ...response.data._embedded.giftCertificateDtoList]);
                setCurrentPage(currentPage => currentPage + 1);
                // setTotalCount(response.headers(['x-total-count']))                
            })
            .finally(() => 
            setFetching(false));
           }
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }


  return (
    <div>
        <input type='search' placeholder='Enter name' onChange={searchByName}></input>
        <div>
        {items.map(item => 
            <div className='photo' key={item.giftCertificateDtoId}>
                <div>
                    <h3>ID: {item.giftCertificateDtoId}</h3>
                    <h3>Name: {item.name}</h3>
                </div>
                
            </div>
            )}
        </div>
    </div>
  )
}

 export default MainContent