import "./Header.css"

import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    // mine's
    <div className="container">
    <div className='header'>
      <h3 className='audiophile'>audiophile</h3>
      <nav>
        <ul className='navigator'>
          <li> <a className='nav-links' href="#">HOMES</a></li>
          <li> <a className='nav-links' href="#">HEADPHONES</a></li>
          <li> <a className='nav-links' href="#">SPEAKERS</a></li>
          <li> <a className='nav-links' href="#">EARPHONES</a></li>
        </ul>
      </nav>
      <div className="icon">
      <CiShoppingCart />
      </div>
    </div>
    </div>
  )
}

export default Header
