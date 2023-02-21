import { useEffect } from 'react';

import '../Navbar/navbar.styles.scss';

// Images
import Logo from '../../images/logo.svg';
import CartIcon from '../../images/icon-cart.svg';
import AvatarImage from '../../images/image-avatar.png';

export const Navbar = (props) => {

const cartCounter = document.getElementsByClassName('cart-counter');

useEffect(() => {
    /* console.log(props.cartCounter) */
}, /* Dependency to be checked on after component mounts*/ [props.cartCounter])

    return(
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
            <div className='cart-container'>
                <img src={CartIcon} id='cart-icon' alt='cart icon'/>
                <div className='cart-counter'>{props.cartCounter}</div>
            </div>

            <img src={AvatarImage} id='avatar-logo' alt='avatar'/>
            </div>

        </div>
    )
}
