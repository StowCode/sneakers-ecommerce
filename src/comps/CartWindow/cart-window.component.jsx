
import '../CartWindow/cart-window.styles.scss';

export const CartWindow = (props) => {

    return(
    <div className='cart-window'>
        <div className='title-bar'>
            <h4 className='cart-title'>Cart</h4>
        </div>

        <div className='main-cart-window'>
            <h4>Your cart is empty.{/*NEEDS TO BE INITIAL STATE*/}</h4>
        </div>
        
    </div>
    )
}