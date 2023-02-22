import { useState } from 'react';

import '../Navbar/navbar.styles.scss';
import { CartWindow } from '../CartWindow/cart-window.component';

// Images
import Logo from '../../images/logo.svg';
import CartIcon from '../../images/icon-cart.svg';
import AvatarImage from '../../images/image-avatar.png';

export const Navbar = (props) => {
    const [cartState, setCartState] = useState(false);

    const openCart = () => {
        cartState ? setCartState(false) : setCartState(true)
    }

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