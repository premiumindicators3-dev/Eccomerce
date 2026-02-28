import CartProduct from "../components/CartProduct";
const cartItems = [
  {
    productId:"1",
    name:"Nike Shoes",
    price:1999,
    quantity:2,
    image:"https://picsum.photos/200"
  }
];


const increaseQty = async()=>{
  
}

const decreaseQty = ()=>{

}

const removeItem = ()=>{

}

const CartPage = ()=>{
    return <div>
        <div>
            <CartProduct increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem}  item = {cartItems[0]}/>
        </div>
    </div>
}

export default CartPage;