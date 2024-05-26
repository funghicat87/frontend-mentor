import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipePage" element={<RecipePage />} />
      </Routes>
    </div>
  );
};

export default App;