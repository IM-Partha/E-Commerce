
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Pages/Navbar'
import LoadingPage from './Pages/LoadingPage'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
         <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </>
  )
}

export default App
