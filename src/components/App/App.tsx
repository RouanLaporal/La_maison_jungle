import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import ShoppingList from '../ShoppingList/ShoppingList';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Cart/>
      <ShoppingList/>
      <Footer/>
    </div>
  );
}

export default App;
