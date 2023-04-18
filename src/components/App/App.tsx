import { useState, useEffect } from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import ShoppingList from '../ShoppingList/ShoppingList';
import Footer from '../Footer/Footer';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <div className="App">
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList 
          cart={cart} 
          updateCart={updateCart}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
