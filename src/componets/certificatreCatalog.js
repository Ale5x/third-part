import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import product_card from "../data/data-content";

function CertificatreCatalog() {
    const [items, setItems] = useState(product_card._embedded.giftCertificateDtoList);
    const [dispatch, setDispatch] = useState();
    const pages = [1, 2, 3, 4, 5]

    const [fetching, setFetching] = useState(true);
    const [nameValue, setSeacrhValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageForName, setCurrentPageForName] = useState(1);


    

    const countItemsonPage = () => {
        const select = document.getElementById("type_out");
        console.log("SELRCT", select.options[select.selectedIndex].value)
    }


    const searchByName = (e) => {
        setItems([])
        setSeacrhValue(e.target.value);
        setCurrentPageForName(1);
        setCurrentPage(1);
        setFetching(true)
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
    <div>
        <div>
            Message position 
        </div>
        <div>
            <input type='search' placeholder='Enter name' onChange={searchByName}></input>
        </div>
        <div>
        <select id='type_out' onChange={countItemsonPage}>
            <option value="date">Пункт 1</option>
            <option value="date_reverse">Пункт 2</option>
        </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Date created</td>
                        <td>Date Updated</td>
                        <td>Price</td>
                        <td>Duration</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => 
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.createDate}</td>
                            <td>{item.lastUpdateDate}</td>
                            <td>{item.price}</td>
                            <td>{item.duration}</td>
                            <td>
                                <button type='submit'>Delete</button>
                                <button type='submit'>Edit</button>
                                <button type='submit'>View</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            <div className='page'>
                {pages.map((page, index) => 
                <span key={index} className={currentPage == page ? 'current-page' : 'page'}>{page}</span>               
                )}
            </div>
        </div>
    </div>
  )
}

export default CertificatreCatalog

{/* <button key={index} className={currentPage == page ? 'current-page' : 'page'} 
                onClick={changePage(page)}>{page}</button>
                ) */}


                