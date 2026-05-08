import { useState, useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { StoreItemType } from '@pos-dashboard/shared'
import '../App.css'

import StoreItem from '../components/StoreItem'
import Login from '../pages/Login';
import { useAuth } from '../context/AuthContext';
import { Link } from "react-router-dom";


/**
 * StoreFront Component: The main customer-facing landing page.
 * Displays a grid of products fetched from Firestore.
 */
function StoreFront() {
  // State for storing the list of products from the database
  const [products, setProducts] = useState<StoreItemType[]>([])
  // State to track if the data is still being loaded
  const [loading, setLoading] = useState(true)
  // State to toggle the visibility of the admin login modal
  const [loginVisible, setLoginVisible] = useState(false);
  // Login status state
  const { user } = useAuth();

  // Toggles the login modal visibility
  const adminLoginOnClick = () => {
    setLoginVisible(!loginVisible);
  }

  // Fetch products from Firestore on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'))
        // Map Firestore documents to our shared StoreItemType
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
    <div className="flex flex-col m-4 relative">
      {/* Navigation Header */}
      <div className="navbar justify-between flex flex-col gap-2 sm:flex-row">
        <div className="btn btn-ghost text-xl">Detonate Fundraising</div>
        { user == null 
          ? <button className="btn" onClick={adminLoginOnClick}>Admin</button> 
          : <button className="btn">Admin: {user.displayName}</button>}
      </div>

      {/* Main Product Grid */}
      {loading 
        ? <div className="p-10 text-center">Loading products...</div>
        : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
            {products.map((product, index) => (<StoreItem key={index} item={product} />))}
          </div>}

      {/* Conditional Login Overlay */}
      {loginVisible && (
        <Login 
          adminLoginOnClick={adminLoginOnClick} 
        />
      )}
    </div>
  )
}

export default StoreFront