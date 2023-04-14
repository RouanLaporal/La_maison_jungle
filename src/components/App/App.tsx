import React from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Cart/>
      <ShoppingList/>
    </div>
  );
}

export default App;
