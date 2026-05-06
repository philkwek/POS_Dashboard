import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import { StoreItemType } from '@pos-dashboard/shared'
import './App.css'
import StoreItem from './components/StoreItem'

function StoreFront() {
  const [products, setProducts] = useState<StoreItemType[]>([])
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <div>Loading products...</div>
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
        {products.map((product, index) => (
          <StoreItem key={index} item={product} />
        ))}
      </div>
    </>
  )
}

export default StoreFront