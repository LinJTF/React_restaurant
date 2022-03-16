import React from 'react'

import Hero from './components/Hero'
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle }  from './globalStyle'
import { productData, productDataTwo } from './components/Products/data'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Pick your favorite sweet' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
