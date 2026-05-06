import { useState } from 'react'
import './App.css'
import StoreItem from './components/StoreItem'

function StoreFront() {


  return (
    <>
      <div className="grid grid-cols-1 gap-4 m-4">
            <StoreItem />
      </div>
    </>
  )
}

export default StoreFront