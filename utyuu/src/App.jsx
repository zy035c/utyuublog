import './App.css';
import React from 'react';
import Vocallection from './vocalo/disc';
import OldAppDemo from './old_app/oldapp';
import { Link, Routes, BrowserRouter, Route } from 'react-router-dom';

const Card = ({ to, title }) => {
  return (
    <Link to={to} className="w-48 h-32 mx-4 my-8 p-4 bg-gray-200 rounded-md transition-transform transform hover:scale-105">
      <div className="flex items-center justify-center h-full">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  );
};

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card to="/old_demo" title="Old App" />
      <Card to="/vocallection" title="Vocallection" />
    </div>
  );
};

const App = () => {
  // console.log("yes");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/old_demo/*" element={<OldAppDemo/>} />
          <Route path="/vocallection/*" element={<Vocallection/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
