
import { Navbar } from './comps/Navbar/navbar.comp';

import './App.css';
import './comps/Navbar/navbar.styles.scss';

// Images
import Logo from './images/logo.svg';
import CartIcon from './images/icon-cart.svg';
import AvatarImage from './images/image-avatar.png';

const App = () => {
  return (
    <div className="App">

      <div id='navbar'>
        <ul id='navlinks'>
          <img id='logo' src={Logo} alt='sneakers logo'/>
          <li>Collections</li>
          <li>Mens</li>
          <li>Womens</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        
        <div id='cart-and-avatar'>
          <div classname='cart-container'>
            <img src={CartIcon} id='cart-icon' alt='cart icon'/>
            <div className='cart-counter'>1</div>
          </div>

          <img src={AvatarImage} id='avatar-logo' alt='avatar'/>
        </div>

      </div>
{/*       <Navbar /> */}
    </div>
  );
}

export default App;
