import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DrawerLayout from './components/DrawerLayout';
import StoreFront from './pages/StoreFront';
import StoreItemPage from './pages/StoreItemPage';
import Finance from './pages/Finance';
import Inventory from './pages/Inventory';
import Pos from './pages/Pos';
import Admin from './pages/Admin';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="text-sm sm:text-base md:text-lg">
        <Router>
          <DrawerLayout>
            <Routes>
              <Route path="/" element={<StoreFront />} /> 
              <Route path="/:productId" element={<StoreItemPage />} />
              
              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/finance" element={<Finance />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/pos" element={<Pos />} />
                <Route path="/admin" element={<Admin />} />
              </Route>
            </Routes>
          </DrawerLayout>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
