import { useState } from 'react';

import '../Navbar/navbar.styles.scss';
import { CartWindow } from '../CartWindow/cart-window.component';
import CloseIcon from '../../images/icon-close-black.svg';

// Images
import Logo from '../../images/logo.svg';
import CartIcon from '../../images/icon-cart.svg';
import AvatarImage from '../../images/image-avatar.png';

export const Navbar = (props) => {
    const [cartState, setCartState] = useState(false);
    const openCart = () => {
        cartState ? setCartState(false) : setCartState(true)
    }

    const [openMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        openMobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    return(
        <div id='navbar'>

            <div id='hamburger' onClick={handleMobileMenu}>
                <span className='line'></span>
                <span className='line'></span>
                <span className='line'></span>
            </div>

        { openMobileMenu ?
            <div id='mobile-navbar'>
                <div className='page-filter'></div>
                <ul id='mobile-navlinks'>
                    <img onClick={handleMobileMenu} src={CloseIcon} className='mobile-x'/>
                    <li className='mobile-link'>Collections</li>
                    <li className='mobile-link' >Mens</li>
                    <li className='mobile-link' >Womens</li>
                    <li className='mobile-link' >About</li>
                    <li className='mobile-link' >Contact</li>
                </ul>
            </div>
        : null    
        }

            <ul id='navlinks'>
                <img id='logo' src={Logo} alt='sneakers logo'/>
                <li className='desktop-link'>Collections</li>
                <li className='desktop-link'>Mens</li>
                <li className='desktop-link'>Womens</li>
                <li className='desktop-link'>About</li>
                <li className='desktop-link'>Contact</li>
            </ul>
            
            <div id='cart-and-avatar'>
            <div className='cart-container'>
                <img onClick={openCart} src={CartIcon} id='cart-icon' alt='cart icon'/>
                
                { props.cartCounter > 0 ? <div className='cart-counter'>{props.cartCounter}</div>: null}   

            </div>

            <img src={AvatarImage} id='avatar-logo' alt='avatar'/>
            </div>

            {
                cartState ? 
                    <CartWindow 
                        cartObject={props.cartObject} // Prop drilling?
                        setCartObject={props.setCartObject}
                        setCartCounter={props.setCartCounter}
                    />
                : null
            }


        </div>
    )
}