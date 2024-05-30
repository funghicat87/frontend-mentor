import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import ContactForm from './pages/ContactForm.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecipePage" element={<RecipePage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default App;