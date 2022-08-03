import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import ModalMessage from './ModalMessage';
import ModelViewItem from './ModelViewItem';
import ModelAddItem from './ModelAddItem';
import product_card from "../data/data-content";


function CertificatreCatalog() {
    const [items, setItems] = useState(product_card._embedded.giftCertificateDtoList);
    // const [items, setItems] = useState([]);
    const [viewItem, setViewItem] = useState(0);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalViewItem, setOpenModalViewItem] = useState(false);
    const [openModalAddItem, setOpenModalAddItem] = useState(false);
    const [lastPage, setLastPage] = useState(50);
    const [dispatch, setDispatch] = useState();
    const [typeStatus, setTypeStatus] = useState({typeDefault: true, typeSortDate: false, typeReverseSortDate: false})
    
    const [id, setId] = useState(0);
    const pages = [1, 2, 3, 4, 5];
    const [message, setMessage] = useState("Test message");
    let initUrl = "";
    // const [countItems, setCountItems] = useState((sessionStorage.getItem('countItems') === null) ? 10 : sessionStorage.getItem('countItems'))
    const [countItems, setCountItems] = useState(10);
    const [defaultCountItems, setDefaultCountItems] = useState(10)
    const [fetching, setFetching] = useState(true);
    const [nameValue, setSeacrhValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageForName, setCurrentPageForName] = useState(1);
    let defUrl = `http://localhost:8080/store/certificate/getAllCertificates?size=${countItems}&page=${currentPage}`
    const [defaultUrl, setDefaultUrl] = useState(defUrl);
    const [url, setUrl] = useState("")


    const typeOutputItems = () => {
        const select = document.getElementById("type-out");
        setCurrentPage(1);
        setItems([]);
        switch(select.options[select.selectedIndex].value) {
            case "certificates":
                setTypeStatus({...typeStatus, typeReverseSortDate: false, typeDefault: true, typeSortDate: false});
                break;
            case "date_reverse":
                setTypeStatus({...typeStatus, typeReverseSortDate: true, typeDefault: false, typeSortDate: false});
                break;
            case "date":
                setTypeStatus({...typeStatus, typeReverseSortDate: false, typeDefault: false, typeSortDate: true});
                break;
            default:
                setTypeStatus({...typeStatus, typeReverseSortDate: false, typeDefault: true, typeSortDate: false});
                break;
        }
        setFetching(true)
    }

    const countItemsSelect = () => {
        const select = document.getElementById("type-count-out");
        sessionStorage.setItem('countItems', select.options[select.selectedIndex].value);
        switch(select.options[select.selectedIndex].value) {
            case "count-10":
                console.log("count-10");
                setCountItems(10);
                break;
            case "count-50":
                console.log("count-50");
                setCountItems(50);
                break;
            case "count-100":
                console.log("count-100");
                setCountItems(100);
                break;
            default:
                console.log("DEFAULT count TYPE")
                setCountItems(10);
                console.log("DEFAULT TYPE / URL", url)
        }
        console.log("setCountItems", countItems);
        setFetching(true)
    }


    const searchByName = (e) => {
        setItems([])
        setSeacrhValue(e.target.value);
        setCurrentPageForName(1);
        setCurrentPage(1);
        setFetching(true)
    }

    const acctionDelete = (e) =>  {
        setId(e.target.value)
        setOpenModalDelete(true)
        console.log("acctionDelete id value", e.target.value);
        
    }

    const acctionViewItem = (e) => {
        console.log("ITEM ID", e.target.value);
        setViewItem(e.target.value);
        setOpenModalViewItem(true);
    }

    const navigationNextPage = () => {
        setCurrentPage(currentPage => currentPage + 1);
        setFetching(true);
    }

    const navigationPrevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1);
            setFetching(true);
        }
    }

    const ModalMessag = status => {
        if(status) {
            setMessage(`Item with id: ${id} deleted`);
            setId(0);
            setOpenModalDelete(false);
            setFetching(true);
        } else {
            setOpenModalDelete(false);
            setMessage("");
            console.log("set ID 0");
            setId(0);
        }
    }

    const ModalViewItem = () => {
        console.log("START ModalViewItem")
    }

    useEffect(() => {
        let url = ""
        // if(fetching) {
        //    if(nameValue !== "") {
        //     axios.get(`http://localhost:8080/store/certificate/getCertificatesByPartName?size=10&page=${currentPage}&name=${nameValue}`)
        //     .then(response => {
        //         setItems([...response.data._embedded.giftCertificateDtoList]);
        //     })
        //     .finally(() => 
        //     setFetching(false));
        //    } else {
           
        //     if(typeStatus.typeSortDate) {
        //         url = `http://localhost:8080/store/certificate/allSortDate?size=${countItems}&page=${currentPage}`;
        //     } else if(typeStatus.typeReverseSortDate) {
        //         url = `http://localhost:8080/store/certificate/allSortReverseDate?size=${countItems}&page=${currentPage}`;
        //     } else {
        //         url = `http://localhost:8080/store/certificate/getAllCertificates?size=${countItems}&page=${currentPage}`;
        //         console.log("TYPE OUTPUT AND SET URL");
        //         setUrl(url);
        //     }

        //     console.log("TEST URL After DELETING", url);
        //     axios.get(url)
        //     .then(response => {
        //         setItems([...response.data._embedded.giftCertificateDtoList]);
        //     })
        //     .finally(() => 
        //     setFetching(false));
        //    }
        // }
    }, [fetching])


  return (
    <div>
        <div className='addBtn'>
            <button onClick={() => setOpenModalAddItem(true)} className='btn-add'>Add new Certificate</button>
        </div>
        <div className='main-content'>
        <div>
            {openModalDelete && <ModalMessage ModalMessag = {ModalMessag} id={id}/>}
            {openModalViewItem && <ModelViewItem id={viewItem} closeModal={setOpenModalViewItem}/>}
            {openModalAddItem && <ModelAddItem closeModal={setOpenModalAddItem} error={setMessage}/>}
        </div>
        <div>
            <div className='message'>
                <h1>{(message != "") ? message : ""}</h1>
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
                        <option selected="selected" value="certificates">Show Certificates</option>
                        <option value="date">Show by date</option>
                        <option value="date_reverse">Show by reverse date</option>
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
                                <button onClick={() => setOpenModalViewItem(true)} value={item} className='btn-edit'>Edit</button>
                                <button onClick={acctionViewItem} value={item.giftCertificateDtoId} className='btn-view'>View</button>
                            </td>
                        </tr>)}
                </tbody>
            </table>
            <div className='pages'>
                <span>
                    <span className='settings-span'>
                        <button className='btn-navigation' onClick={navigationPrevPage}>Prev</button>
                    </span>
                    <span className='current-page'>
                            {currentPage}
                    </span>
                    <span className='settings-span'>
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
    </div>
  )
}

export default CertificatreCatalog

{/* <button key={index} className={currentPage == page ? 'current-page' : 'page'} 
                onClick={changePage(page)}>{page}</button>
                ) */}


                