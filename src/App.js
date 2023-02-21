import { useState, useEffect } from 'react';

import { Navbar } from './comps/Navbar/navbar.comp';

import './App.css';
import './comps/Product Page/product.styles.scss';
import data from '../src/product-info.json';

// Images
import cartIcon from '../src/images/icon-cart-white.svg';
import minusButton from '../src/images/icon-minus.svg';
import plusButton from '../src/images/icon-plus.svg';
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';

const App = () => {
  const [cartCounter, setCartCounter] = useState([1]);
  const [salePrice, setSalePrice] = useState();
  const [quantity, setQuantity] = useState(0);
  const [currentImage, setCurrentImage] = useState(image1);

  const info = data.database.product;

  const saleCalculator = () => {
    let discount = info.sale_value / 100;
    setSalePrice(info.price * discount);
  }

  const selectPicture = (event) => {
    // sets image source for carousel
    setCurrentImage(event.target.src)
    // applies CSS class
    // 
  }


  return (
    <div className="App">

      <Navbar 
        cartCounter={cartCounter}
      />

      <div className='product_page'>

        <div className='product_images'>
          <img className='main-image' src={currentImage}/>

          <div className='thumbnails-container'>
            <img className='image-thumbnails' onClick={selectPicture} id='image1' src={image1}/>
            <img className='image-thumbnails' onClick={selectPicture} id='image2' src={image2}/>
            <img className='image-thumbnails' onClick={selectPicture} id='image3' src={image3}/>
            <img className='image-thumbnails' onClick={selectPicture} id='image4' src={image4}/>
          </div>
        </div>

        <div className='product_info'>
          <h6>{info.brand.toLocaleUpperCase()}</h6>
          <h3>{info.name}</h3>
          <p className='description'>{info.description}</p>

          <div className='price-box'>
            <h4>${salePrice}</h4>
            <p className='sale-value'>{info.sale_value}%</p>
          </div>

          <p className='full-price'>${info.price.toFixed(2)}</p>

          <div className='button_container'>
            <div className='quantity-container'>
              <img className='plusminus' src={minusButton}/>
              <h4>{quantity}</h4>
              <img className='plusminus' src={plusButton}/>
            </div>
            
            <button>
              <img className='button-cart-icon' src={cartIcon}/>
              Add to Cart
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
