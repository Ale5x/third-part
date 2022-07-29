import React from 'react'

export default function header() {
  return (
    <nav>
        <div className='logo'>Roers...</div>
        <ui>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
        </ui>
        <div className='search'>
            <i className='fa fa-search'></i>
            <i className='fa fa-shoping-basket'></i>
        </div>
    </nav>
  )
}
