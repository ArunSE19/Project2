import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { AddShoppingCart } from '@mui/icons-material'
const Header = () => {
  return (
    <>
    
    <div>
    <header className='header'>
      <div className="header-links">
        <ul>
            <li>
                <Link to="/Cart" className='cart' id='cart'><AddShoppingCart/></Link>
            </li>
        </ul>
      </div>
      </header>
    </div>
    </>
  )
}

export default Header
