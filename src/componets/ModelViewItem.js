import React, {useState} from 'react'

function ModelViewItem({ModelViewItem, items}) {
    const [item, setItem] = useState();

  
  return (
    <div>
        <div className='content'>
            <p>Content</p>
        </div>
        <div className='footer'>
            <button>Close</button>
        </div>
    </div>
  )
}

export default ModelViewItem