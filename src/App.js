import { useState } from 'react';

import { Navbar } from './comps/Navbar/navbar.comp';
import { ProductPage } from './comps/Product Page/product.comp';

import './App.css';



const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartArray, setCartArray] = useState([
    {
      item: {
        image: '',
        name: '',
        sale_price: '',
        quantity: ''
      }
    }
  ])

  return (
    <div className="App">

      <Navbar 
        cartCounter={cartCounter}
        setCartCounter={setCartCounter}
/*         cartBadge={cartBadge} */
      />
      <ProductPage 
        setCartCounter={setCartCounter}
      />

    </div>
  );
}

export default App;
