import { useState } from 'react';

import { Navbar } from './comps/Navbar/navbar.comp';
import { ProductPage } from './comps/Product Page/product.comp';

import './App.css';

// json
import data from '../src/product-info.json';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [cartCounter, setCartCounter] = useState(quantity);
  
  const productInfo = data.database.product;
  const [cartObject, setCartObject] = useState({ 
    cart: {
        placeholder: 'Your cart is empty.',
        
        item: {
          inCart: false,
          image: '',
          name: '',
          sale_price: '',
          quantity: ''
        }
      }
    }
  )

  const vibrate = () => {
     if(!("vibrate" in navigator)){
         alert("Vibrate not supported!");
         return;
       }
       navigator.vibrate(2000);
  }

  return (
    <div className="App">
      

      <Navbar 
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        cartObject={cartObject}
        setCartObject={setCartObject}
      />
      
      <ProductPage
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        data={data}
        quantity={quantity}
        setQuantity={setQuantity}
        cartObject={cartObject}
        setCartObject={setCartObject}
        vibrate={vibrate}
      />

    </div>
  );
}

export default App;


