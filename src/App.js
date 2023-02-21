import { useState } from 'react';

import { Navbar } from './comps/Navbar/navbar.comp';
import { CartWindow } from './comps/CartWindow/cart-window.component';
import { ProductPage } from './comps/Product Page/product.comp';

import './App.css';

// json
import data from '../src/product-info.json';

const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const productInfo = data.database.product;
  const [cartArray, setCartArray] = useState([
    {
      item: {
        placeholder: 'Your cart is empty.',
        image: productInfo.images.p1,
        name: productInfo.name,
        sale_price: productInfo.sale_price,
        quantity: '3'
      }
    }
  ])

  
  return (
    <div className="App">
      <CartWindow 
        cartArray={cartArray}
      />

      <Navbar 
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
/*         cartBadge={cartBadge} */
      />
      <ProductPage 
        setCartCounter={setCartCounter}
        data={data}
        quantity={quantity}
        setQuantity={setQuantity}
      />

    </div>
  );
}

export default App;


