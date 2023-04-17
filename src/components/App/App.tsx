import { useState } from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import ShoppingList from '../ShoppingList/ShoppingList';
import Footer from '../Footer/Footer';

function App() {
  const [cart, updateCart] = useState(0)
  
  return (
    <div className="App">
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
