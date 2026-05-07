import { useState } from 'react'
import StoreFront from './pages/StoreFront';
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
       <Route path="/" element={<StoreFront/>} /> 
      </Routes>
    </Router>
  )
}

export default App
