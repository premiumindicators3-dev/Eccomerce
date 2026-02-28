import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
const {id }= useParams();

const [product,setProduct] = useState([]);

const [quantity,setQuantity] = useState(1);


const increaseQty = ()=>{
  setQuantity(quantity+1);
}

const decreaseQty = ()=>{
  setQuantity(quantity-1);
}

useEffect(()=>{
    const getDetails = async()=>{
        const res = await  fetch(`http://localhost:4000/api/products/${id}`)
        const data = await res.json();
      setProduct(data);

    }
    getDetails();
},[])

const addToCart =async ()=>{
  const cartItem = {
    productId:product.id,
    quantity,
    price:product.price
  }
  const url = "http://localhost:4000/api/carts";
  const options = {
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    credentials:"include",
    body:JSON.stringify(cartItem)
  }
  const res = await fetch(url,options);
  if(res.status==201){
    console.log("cart created");
  }
}
    
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

    <div>
      <button onClick={decreaseQty} className="p-2 bg-blue-600">-</button>
      {quantity}
      <button onClick={increaseQty} className="p-2 bg-blue-600">+</button>

    </div>

        <button
          
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </button>
        <button
          
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          onClick={addToCart}
        >
          Add To Cart Now
        </button>

      </div>
    </div>
  );
};

export default ProductDetails;