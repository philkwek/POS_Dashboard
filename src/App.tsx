import { useState } from 'react'
import StoreFront from './pages/StoreFront';
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col">
        <div className="navbar justify-between">
          <div className="btn btn-ghost text-xl">Detonate Fundraising</div>
          <button className="btn ">Admin</button>
        </div>
        <StoreFront /> 
      </div>
    </>
  )
}

export default App
