import { useState } from 'react';

import { Navbar } from './comps/Navbar/navbar.comp';
import { ProductPage } from './comps/Product Page/product.comp';

import './App.css';

// json
import data from '../src/product-info.json';

const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  const productInfo = data.database.product;
/*   const [cartArray, setCartArray] = useState([
    {
      placeholder: 'Your cart is empty.'
    },
    {
      item: {
        inCart: false, // switch this to see product in cart

      }
    }
  ]) */

  const [cartArray, setCartArray] = useState({ 
    cart: {
        placeholder: 'Your cart is empty.',
        
        item: {
          inCart: false,
          image: productInfo.images.p1,
          name: productInfo.name,
          sale_price: productInfo.sale_price,
          quantity: '3'
        }
      }
    }
  )


  return (
    <div className="App">
      

      <Navbar 
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
        cartArray={cartArray}
      />
      <ProductPage 
        setCartCounter={setCartCounter}
        data={data}
        quantity={quantity}
        setQuantity={setQuantity}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />

    </div>
  );
}

export default App;


