import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/fontawesome-svg-core'
import './index.css'

const Header = () => {
  console.log('hello')

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          src="https://zerozilla.com/static/media/applogo.753908a08e13c14b01f7976de9884093.svg"
          alt="website logo"
        />
        <input
          type="search"
          placeholder="search for product you like"
          className="search-element"
        />
        <ul className="nav-menu">
          <li className="margin-right">
            <Link to="/cart" className="nav-link">
              {/* <FontAwesomeIcon icon="fal fa-shopping-cart" /> */}
              <img
                src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-vector-id1151942531?s=612x612"
                alt="cart icon"
                className="cart-img"
              />
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-link">
              <img
                src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
                alt="profile"
                className="profile-img"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
