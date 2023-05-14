import React from 'react';
import './css/main.css';
import Listing from './Listing';
import etsy from './data/etsy';

function App() {
  return <Listing items={etsy} />;
}

export default App;
