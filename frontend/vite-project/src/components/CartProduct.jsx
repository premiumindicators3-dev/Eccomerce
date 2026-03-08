import { FaTrash } from "react-icons/fa";

const CartProduct = ({ item, increaseQty, decreaseQty, removeItem }) => {
  const total = item.price * item.quantity;

  return (
    <div className="flex items-center justify-between border-b py-4">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">

        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
        />

        {/* Product Info */}
        <div>
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-500">₹ {item.price}</p>
        </div>

      </div>

      {/* QUANTITY CONTROLLER */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => decreaseQty(item.productId)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          -
        </button>

        <span className="font-semibold">{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.productId)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          +
        </button>

      </div>

      {/* TOTAL PRICE */}
      <div className="font-semibold w-24 text-center">
        ₹ {total}
      </div>

      {/* DELETE */}
      <button
        onClick={() => removeItem(item.productId)}
        className="text-red-500 hover:text-red-700"
      >
        <FaTrash size={18}/>
      </button>

    </div>
  );
};

export default CartProduct;