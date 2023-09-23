import { conn } from '@/libs/mysql'
import axios from "axios";

async function loadProducts(){
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;

}

async function ProductsPage() {
    const products = await loadProducts();
    console.log(products);
  
    return <div className='text-white'></div>;
  
}

export default ProductsPage
