import { useState } from 'react';

// styles
import '../Product Page/product.styles.scss';

// Images
import cartIcon from '../../images/icon-cart-white.svg';
import minusButton from '../../images/icon-minus.svg';
import plusButton from '../../images/icon-plus.svg';
import image1 from '../../images/image-product-1.jpg';
import image2 from '../../images/image-product-2.jpg';
import image3 from '../../images/image-product-3.jpg';
import image4 from '../../images/image-product-4.jpg';

export const ProductPage = (props) => {
    const [currentImage, setCurrentImage] = useState(image1);

    const info = props.data.database.product;

    const selectPicture = (event) => {
        // sets image source for carousel
        setCurrentImage(event.target.src)
        // applies CSS class
        // 
    }

    const handleIncrement = () => {
        if (props.quantity >= 0) {
        props.setQuantity(prevQuantity => prevQuantity + 1);
        }
    };  

    const handleDecrement = () => {
        if (props.quantity > 0) {
        props.setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const addToCart = () => {
        props.setCartCounter(prevCartCounter => prevCartCounter + props.quantity);
        props.setQuantity(0);
    }

    /*   const cartBadge = () => {
        const element = cartNotificationRef.current;
        if (cartCounter === 0) {
        element.style.display = 'none';
        } else {
        element.style.display ='block';
        }
    } */

    return(
        <div className='product_page'>

        <div className='product_images'>
          <img className='main-image' src={currentImage} alt=''/>

          <div className='thumbnails-container'>
            <img className='image-thumbnails' onClick={selectPicture} id='image1' src={image1} alt=''/>
            <img className='image-thumbnails' onClick={selectPicture} id='image2' src={image2} alt=''/>
            <img className='image-thumbnails' onClick={selectPicture} id='image3' src={image3} alt=''/>
            <img className='image-thumbnails' onClick={selectPicture} id='image4' src={image4} alt=''/>
          </div>
        </div>

        <div className='product_info'>
          <h6>{info.brand.toLocaleUpperCase()}</h6>
          <h3>{info.name}</h3>
          <p className='description'>{info.description}</p>

          <div className='price-box'>
            <h4>${info.price * (info.sale_value / 100)}</h4>
            <p className='sale-value'>{info.sale_value}%</p>
          </div>

          <p className='full-price'>${info.price.toFixed(2)}</p>

          <div className='button_container'>

            <div className='quantity-container'>
              <img className='plusminus' alt='' src={minusButton} value='1' onClick={handleDecrement}/>
              <h4>{props.quantity}</h4>
              <img className='plusminus' alt='' src={plusButton} value='1' onClick={handleIncrement}/>
            </div>
            
            <button onClick={addToCart}>
              <img className='button-cart-icon' alt='' src={cartIcon}/>
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    )
}


