import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PhotosContent() {
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        if(fetching) {
            console.log("fetching")
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`)
            .then(response => {
                setPhotos([...photos, ...response.data]);
                setCurrentPage(prevState => prevState + 1);
                // setTotalCount(response.headers(['x-total-count']))
                console.log("PHOTOS", photos)
            })
            .finally(() => setFetching(false)) 
        }
    }, [fetching])



    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, []);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        ) {
            
            console.log("SCROLL")
            setFetching(true);
        }
    }


  return (
    <div>
        {photos.map(photo => 
            <div className='photo' key={photo.id}>
                <div>{photo.id} . {photo.title}</div>
                <img src={photo.thumbnailUrl} alt=''></img>

            </div>
            )}
    </div>
  )
}

export default  PhotosContent
