import { useEffect } from "react";
import CartProduct from "../components/CartProduct";
import { useState } from "react";


const CartPage = ()=>{
// const cartItems = [
//   {
//     productId:"1",
//     name:"Nike Shoes",
//     price:1999,
//     quantity:2,
//     image:"https://picsum.photos/200"
//   }
// ];

const [cartItems,setCartItems] = useState(null);

const increaseQty = async()=>{
  
}

const decreaseQty = ()=>{

}

const removeItem = ()=>{

}

useEffect(()=>{
  const getCartItems = async()=>{
    const options ={
      credentials:"include",
    }
    const res = await fetch("http://localhost:4000/api/carts",options);
     const data = await res.json();
     console.log(data);
     setCartItems(data);
    
  }
  getCartItems();
},[]);
 console.log(cartItems);

    return <div>
        <div>


          {cartItems && items.map(item=>item)};
                    </div>
    </div>
}

export default CartPage;