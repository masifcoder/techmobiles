import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Filters from './pages/Filters'
import ProductDetailPage from './pages/productDetailPage'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/detail" element={<ProductDetailPage />} />
          <Route path='/products' element={<Filters />} />
      </Routes>
    </>
  )
}

export default App
