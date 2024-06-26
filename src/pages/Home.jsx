import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/RecipePage">Recipe Page</Link>
      </div>
      <div>
        <Link to="/ContactForm">Contact Form</Link>
      </div>
      <div>
        <Link to="/NewsletterForm">Newsletter Form</Link>
      </div>
      <div>
        <Link to="/ManageLandingPage">Manage Landing Page</Link>
      </div>
    </div>
  );
};

export default Home;