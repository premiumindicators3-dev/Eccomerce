import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
const {id }= useParams();

const [product,setProduct] = useState([]);

useEffect(()=>{
    const getDetails = async()=>{
        const res = await  fetch(`http://localhost:4000/api/products/${id}`)
        const data = await res.json();
      setProduct(data);

    }
    getDetails();
},[])
    
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10 p-6 md:flex">
      
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Product Info */}
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-600 mt-2">${product.price}</p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p
           
          >
            {product.stock}
          </p>
        </div>

        <button
          
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;