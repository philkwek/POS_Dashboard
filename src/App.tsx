import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import StoreFront from './pages/StoreFront';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StoreFront />} /> 
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
