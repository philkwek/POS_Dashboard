import { useState, useEffect, useContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { StoreItemType } from '@pos-dashboard/shared'
import '../App.css'

import StoreItem from '../components/StoreItem'
import Login from '../pages/Login';
import Navbar from '../components/Navbar';


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
      <Navbar onAdminLoginClick={adminLoginOnClick} />

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

      {/* Footer Navigation for Admin */}
    </div>
  )
}

export default StoreFront