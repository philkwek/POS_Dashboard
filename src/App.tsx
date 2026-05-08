import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import StoreFront from './pages/StoreFront';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="text-sm sm:text-base md:text-lg">
        <Router>
          <Routes>
            <Route path="/" element={<StoreFront />} /> 
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App
