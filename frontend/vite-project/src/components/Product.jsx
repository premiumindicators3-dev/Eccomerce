
import { useNavigate } from "react-router-dom";
const Product = ({product})=>{
const navigate = useNavigate();
const {name,price,image,onBuy,_id} = product;
    

    const handleBuy = ()=>{
        console.log(_id);
        navigate(`/products/${_id}`)
    }

    return  <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full min-w-80 h-56 object-cover"
      />

      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className=" text-md text-gray-600 mt-2"> ₹  {price}</p>

        <button
          onClick={handleBuy}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
}
export default Product;