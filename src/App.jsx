import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {RegisterPage } from './pages/RegisterPage'
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/'element={<h1>Ruta Home</h1>}/>
        <Route path='/register'element={<RegisterPage/>}/>
        <Route path='/login'element={<h1>Login</h1>}/>
      </Routes>
    </Router>
  )
  };

export default App
