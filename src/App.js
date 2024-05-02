import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import PageContent from "./components/Content/PageContent.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cards from "./components/Card/Cards.jsx"
import "./App.css"
import { Card } from 'antd';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <PageContent />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
