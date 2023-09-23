import axios from 'axios'

async function loadProduct(productId) {
    const response = await axios.get('http://localhost:3000/api/products/' + productId);
    console.log(response.data)
    return response.data;
}

async function ProductPage({ params }) {
   const product = await loadProduct(params.id);
   console.log(product)
   return (
    <section className='flex justify-center items-center'>
        <div className='p-6 text-yellow-500 bg-black-80'> 
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
    <div className='flex gap-x-2 justify-end mt-2'>
        <button className=' text-white bg-red-500 hover:bg-red-700 py-2 px 
        rounded'>
            delete
        </button>
        <button className=' text-white bg-gray-500 hover:bg-gray-700 py-2 px 
        rounded'>
            Edit 
        </button>
    </div>
    </div>
    </section>
);

}

export default ProductPage

