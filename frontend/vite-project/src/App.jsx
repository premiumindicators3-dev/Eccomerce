import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/register"
import ProductPage from "./pages/ProductsPage"
import ProductDetails from "./pages/ProductDetails"
import AdminPanel from "./pages/AdminPanel"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"
import CartPage from "./pages/CartPage"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<h1>Manohar</h1>}/>
      <Route path="/admin" element={<AdminPanel/>}/>
      <Route path="/products/edit/:id" element={<EditProduct/>}/>
    <Route path="/cart" element={<CartPage/>}/>
      <Route path="/products/add" element={<AddProduct/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<ProductDetails />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
  )
}

export default App
