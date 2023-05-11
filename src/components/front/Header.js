import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className="header-links">
        <ul>
            <li>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
