import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import product_card from "../data/data-content";

function CertificatreCatalog() {
    const [items, setItems] = useState(product_card._embedded.giftCertificateDtoList);
    const [dispatch, setDispatch] = useState();
    const [id, setId] = useState(0);
    const pages = [1, 2, 3, 4, 5];
    const [message, setMessage] = useState("Test message");

    const [countItems, setCountItems] = useState((sessionStorage.getItem('countItems') === null) ? 10 : sessionStorage.getItem('countItems'))

    const [fetching, setFetching] = useState(true);
    const [nameValue, setSeacrhValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageForName, setCurrentPageForName] = useState(1);



    const typeOutputItems = () => {
        const select = document.getElementById("type-out");
        console.log("SELECT type-out", select.options[select.selectedIndex].value)
    }

    const countItemsSelect = () => {
        const select = document.getElementById("type-count-out");
        // sessionStorage.setItem('countItems', select.options[select.selectedIndex].value);
        console.log("SELECT type-count-out", select.options[select.selectedIndex].value)
        setItems([]);
        //start output new items
    }


    const searchByName = (e) => {
        setItems([])
        setSeacrhValue(e.target.value);
        setCurrentPageForName(1);
        setCurrentPage(1);
        setFetching(true)
    }

    const acctionDelete = (e) =>  {
        console.log("acctionDelete id value", e.target.value);
        setMessage(`Item with id ${e.target.value} deleted`)
        sessionStorage.setItem('id', e.target.value);
        // console.log("COOKIE", sessionStorage.getItem('id'))

        console.log("TEST count ITEMS FROM COOKIES", sessionStorage.getItem('countItems'));
        console.log("TEST count ITEMS", countItems);
    }

    const navigationNextPage = () => {
        console.log("Next page")
    }

    const navigationPrevPage = () => {
        console.log("Prev page")
    }


    useEffect(() => {
        // if(fetching) {
        //    if(nameValue !== "") {
        //     axios.get(`http://localhost:8080/store/certificate/getCertificatesByPartName?size=10&page=${currentPage}&name=${nameValue}`)
        //     .then(response => {
        //         setItems([...items, ...response.data._embedded.giftCertificateDtoList]);
        //         currentPageForName(currentPageForName => currentPageForName + 1);
        //         // setTotalCount(response.headers(['x-total-count']))       
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
        // }
    }, [fetching])


  return (
    <div className='main-content'>
        <div>
            <div className='message'>
                {(message != "") ? message : ""}
            </div>
        </div>
        <div className='search-content'>
            <input type='search' placeholder='Enter name' onChange={searchByName} className='input-search'></input>
        </div>
        <div className='settings-content'>
            <div>
                <span className='settings-span'>
                    Type output 
                    <select id='type-out' onChange={typeOutputItems}>
                        <option selected="selected" value="date">Пункт 1</option>
                        <option value="date">Пункт 11</option>
                        <option value="date_reverse">Пункт 2</option>
                    </select>
                </span>
                <span className='settings-span'>
                    Count items output 
                    <select id='type-count-out' onChange={countItemsSelect}>
                    <option selected="selected" value="count-10">10</option>
                    <option value="count-50">50</option>
                    <option value="count-100">100</option>
                    </select>
                </span>
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date created</th>
                        <th>Date Updated</th>
                        <th>Price</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => 
                        <tr key={item.giftCertificateDtoId}>
                            <td>{item.giftCertificateDtoId}</td>
                            <td>{item.name}</td>
                            <td>{item.createDate}</td>
                            <td>{item.lastUpdateDate}</td>
                            <td>{item.price}</td>
                            <td>{item.duration}</td>
                            <td>
                                <button onClick={acctionDelete} value={item.giftCertificateDtoId} className='btn-delete'>Delete</button>
                                <button onClick={acctionDelete} value={item.giftCertificateDtoId} className='btn-edit'>Edit</button>
                                <button onClick={acctionDelete} value={item.giftCertificateDtoId} className='btn-view'>View</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            <div className='pages'>
                <span>
                    <span className='position-prev-btn'>
                        <button className='btn-navigation' onClick={navigationPrevPage}>Prev</button>
                    </span>
                    <span className=''>
                        <span className='current-page'>
                            {currentPage}
                        </span>
                    </span>
                    <span className='position-next-btn'>
                        <button className='btn-navigation' onClick={navigationNextPage}>Next</button>
                    </span>
                </span>
            </div>
            <div>
            <ui className='test'>
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
            <li>Contact</li>
        </ui>
            </div>
        </div>
    </div>
  )
}

export default CertificatreCatalog

{/* <button key={index} className={currentPage == page ? 'current-page' : 'page'} 
                onClick={changePage(page)}>{page}</button>
                ) */}


                