import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Routes, Route, Link } from "react-router-dom";
import Restaurant from './Components/Restaurant';
import OrderHistory from './Components/OrderHistory';
import Account from './Components/Account';
import Banner from './Components/Banner';
import RestaurantAd from './Components/RestaurantAd';

function App() {
  const data = {
    restaurant: 'Alexo Restaurant',
    src: 'https://storage.googleapis.com/great-food-public/res/restaurant_desktop_hero_image/0001/01/7e58fa000e51d0eda2a17c4564811b2dff8897f2.jpeg'
  }

  return (
    <div className="App">
      <Header />
      <Banner data={data} />
      {/* <RestaurantAd /> */}
      <Routes>
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/istoric" element={<OrderHistory />} />
        <Route path="/contul-meu" element={<Account />} />
      </Routes>
    </div >
  );
}

export default App;
