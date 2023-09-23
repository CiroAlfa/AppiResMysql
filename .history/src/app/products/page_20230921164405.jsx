import { conn } from '@/libs/mysql'
import axios from "axios";

async function loadProducts(){
  const { data } = await axios.get("http://localhost:3000/api/products");
  return data;

}

async function ProductsPage() {
    const products = await loadProducts();
    console.log(products);
  
    return <div className='grid gap grid-cols-4 text-white'>
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg border-gray-800 mb-3 p-4">
          <h1 className='text-lg font-bold'>{product.name}</h1>
          <h2 className='text-2xl text-slate-600'>{product.price}</h2>
          <p>{product.description}</p>
          </div>
      ))}
    </div>;
  
}

export default ProductsPage
