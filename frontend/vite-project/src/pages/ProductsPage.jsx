import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductBanner from "../components/ProductBanner";

const ProductPage = ()=>{

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
            const url = "http://localhost:4000/api/products";
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
        }
        getProducts()
    },[])

    return <div>
        <ProductBanner/>
        <h1 className="text-lg my-3 text-bold">Features Prouducts</h1>
        <ProductList products={products}  />
    </div>    
}
export default ProductPage;