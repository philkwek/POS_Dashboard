import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { StoreItemType } from '@pos-dashboard/shared'
import '../App.css'

import StoreItem from '../components/StoreItem'
import Login from '../pages/Login';
import { Link } from "react-router-dom";


interface StoreFrontProps {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
}

function StoreFront({ setEmail, setPassword, handleSignIn }: StoreFrontProps) {
  const [products, setProducts] = useState<StoreItemType[]>([])
  const [loading, setLoading] = useState(true)
  const [login, setLogin] = useState(false);

  const adminLoginOnClick = () => {
    setLogin(!login);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        const productsData = querySnapshot.docs.map(doc => ({
          ...doc.data()
        } as StoreItemType))
        setProducts(productsData)
      } catch (error) {
        console.error("Error fetching products: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col relative">
      <div className="navbar justify-between">
        <div className="btn btn-ghost text-xl">Detonate Fundraising</div>
        <button className="btn" onClick={adminLoginOnClick}>Admin</button>
      </div>
      {loading 
        ? <div>Loading products...</div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
            {products.map((product, index) => (<StoreItem key={index} item={product} />))}</div>}
      {login && (
        <Login 
          adminLoginOnClick={adminLoginOnClick} 
          setEmail={setEmail} 
          setPassword={setPassword} 
          handleSignIn={handleSignIn} 
        />
      )}
    </div>
  )
}

export default StoreFront