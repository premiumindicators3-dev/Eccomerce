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


const [quantity,setQuantity] = useState(1);
const [productId,setProductId] = useState("");

const increaseQty = (id)=>{
  setProductId(id);
  setQuantity(quantity+1);
}

const decreaseQty = ()=>{
  setProductId(id);
  setQuantity(quantity-1);
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


 useEffect(()=> {
  const updateCart=async()=>{
    console.log(productId);
   const options ={
      method:"PUT",
      credentials:"include",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({quantity})
    }
    const res = await fetch(`http://localhost:4000/api/carts/${productId}`,options);
    if(res.status==201){
      console.log("updated");
    }
  }
updateCart();
 },[quantity]);

    return <div>
        <div>
          {cartItems && cartItems.map(item=>{
            const {productId,price} = item;
            const i = {...productId,price,quantity};

            return <CartProduct key={item._id} item={i} increaseQty={()=>increaseQty(productId._id)} decreaseQty={decreaseQty} removeItem={removeItem}/>
          })};
                    </div>
    </div>
}

export default CartPage;