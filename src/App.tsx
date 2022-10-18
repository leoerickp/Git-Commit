import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import './App.css'

import Header from './components/hearder';
import Footer from './components/footer';
import Router from './components/router';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Router />
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App
