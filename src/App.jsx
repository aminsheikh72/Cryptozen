import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AllCoins from './pages/AllCoins';
import { ToastContainer } from 'react-toastify';
import CoinDetails from './pages/CoinDetails';
import SearchCoinList from './pages/searchCoinList';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#010613]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allcoins" element={<AllCoins />} />
          <Route path="/coin/:id" element={<CoinDetails />} />
          <Route path="/search/:query" element={<SearchCoinList />} />
          <Route path="/cart" element={<Cart />} />




        </Routes>
        <Footer/>      
        <ToastContainer/>
      </div>
    </Router>
  );
}

export default App;