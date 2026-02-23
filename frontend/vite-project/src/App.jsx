import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"
import ProductPage from "./pages/ProductsPage"
import ProductDetails from "./pages/ProductDetails"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<h1>Manohar</h1>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
  )
}

export default App
