import axios from 'axios'

async function loadProduct(productId){
   const res= await axios.get(
    'http:localhost:3000/api/products/' + productId);
    console.log(res)
}

async function ProductPage({ params }) {
    const product = await loadProduct(params.id);
    console.log(product)
  return (
    <div className='text-white'>
        ProductPage
      
    </div>
  )
}

export default ProductPage
