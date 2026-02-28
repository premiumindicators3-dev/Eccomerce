import { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {

const [products,setProducts] = useState([]);

const navigate = useNavigate();

useEffect(() => {
  const getProducts = async () => {
    const url = "http://localhost:4000/api/products";
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  }
  getProducts()
}, )


const editProduct = (id) => {
  navigate(`/products/edit/${id}`) ;
}
const addProduct = ()=>{
  navigate("/products/add");
}
const deleteProduct = async(id)=>{
 const options={
  method:"DELETE",
  credentials: "include",
 } 
 const res = await fetch(`http://localhost:4000/api/products/${id}`,options);
 if(res.status==200)
 {
  navigate("/admin");
 }
}



  return <div className="bg-gray-50 h-screen p-3">
    <h1 className="text-4xl">Dashboard</h1>

    <div className="flex m-3 justify-between align-center">
      <h3 className="text-2xl">Mamnage Products</h3>
      <button  onClick={addProduct} className="bg-green-400 text-white px-2 py-1 rounded-md">Add New Product</button>
    </div>
    <div className="grid grid-cols-5 gap-4 bg-gray-100 p-3 rounded font-semibold text-gray-700">
      <p>Product</p>
      <p>Price</p>
      <p>Stock</p>
      <p>Category</p>
      <p className="">Actions</p>
    </div>
  {products.map((product)=><ProductRow key={product._id} product={product} onDelete={()=>deleteProduct(product._id)} onEdit={()=>editProduct(product._id)}/>)}
  </div>
}
export default AdminPanel;