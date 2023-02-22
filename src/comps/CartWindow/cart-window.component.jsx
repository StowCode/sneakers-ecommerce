
import '../CartWindow/cart-window.styles.scss';

import trashIcon from '../../images/icon-delete.svg';

export const CartWindow = (props) => {
    const cart = props.cartObject.cart.item;
    const placeholder = props.cartObject.cart.placeholder;

/*     const clearItem = () => {
        props.setCartObject(prevCartObject => ({
            ...prevCartObject,
            cart: {
              item : {
                inCart: false,
                image: '',
                name: '',
                sale_price: '',
                quantity: ''
              }
            },
         })); */

    const clearItem = () => {
        props.setCartObject(prevCartObject => ({
            ...prevCartObject,
            cart: {
                placeholder: 'Your cart is empty.',
                item: {
                    inCart: false,
                }
            }
        }))
        props.setCartCounter(0)
        console.log('delete')
    }
    

    return(
    <div className='cart-window'>
        <div className='title-bar'>
            <h4 className='cart-title'>Cart</h4>
        </div>

        <div className='main-cart-window'>
            
            { !cart.inCart ? <h4>{placeholder}</h4> : 
            
            <div>
                {/* This will be replaced by <CartInfo /> */}
            <div className='cart-item-info'> {/* Need to map through array to populate the cart */}
                <img className='cart-image-thumbnail' src={cart.image} />
                
                <div>
                    <p className='cart-item-name'>{cart.name}</p>
                    
                    <div className='pricing-flex'>
                        <p>{`$${cart.sale_price} x ${cart.quantity}`}</p>
                        <p className='product-total'>${(cart.sale_price * cart.quantity)}</p>
                    </div>
                </div>
                
                <img src={trashIcon} onClick={clearItem} className='trash-icon'/>
            </div>

            <button 
                className='checkout-button'
                onClick={() => {
                    alert('This demo site does not include a checkout page... yet!  Thanks for visiting')
                }}
                
            >Checkout</button>
            </div>
            }

        </div>
        
    </div>
    )
}