import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import { Routes, Route, Link } from "react-router-dom";
import Restaurant from './Components/Restaurant';
import OrderHistory from './Components/OrderHistory';
import Account from './Components/Account';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/istoric" element={<OrderHistory />} />
        <Route path="/contul-meu" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
