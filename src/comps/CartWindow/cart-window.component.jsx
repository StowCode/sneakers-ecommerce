
import '../CartWindow/cart-window.styles.scss';

import trashIcon from '../../images/icon-delete.svg';

export const CartWindow = (props) => {
    const cart = props.cartArray[0].item;

    return(
    <div className='cart-window'>
        <div className='title-bar'>
            <h4 className='cart-title'>Cart</h4>
        </div>

        <div className='main-cart-window'>
{/*             <h4>{cart.placeholder}</h4> */}

            <div className='cart-item-info'> {/* Need to map through array to populate the cart */}
                <img className='cart-image-thumbnail' src={cart.image} />
                
                <div>
                    <p className='cart-item-name'>{cart.name}</p>
                    
                    <div className='pricing-flex'>
                        <p>{`$${cart.sale_price.toFixed(2)} x 3`}</p>
                        <p className='product-total'>${(cart.sale_price * cart.quantity).toFixed(2)}</p>
                    </div>
                </div>
                
                <img src={trashIcon} className='trash-icon'/>
            </div>
            
            <button className='checkout-button'>Checkout</button>
        </div>
        
    </div>
    )
}