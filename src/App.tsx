import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import StoreFront from './pages/StoreFront';
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <Routes>
       <Route path="/" element={<StoreFront 
        handleSignIn={handleSignIn} 
        setEmail={setEmail} 
        setPassword={setPassword}/>} /> 
      </Routes>
    </Router>
  )
}

export default App
