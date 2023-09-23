import axios from 'axios'

function async loadProduct(productId){
   const res= await axios.get('http:localhost:3000/api/products/' + productId);
    console.log(res)
}

function ProductPage({ params }) {
    console.log(params)
  return (
    <div className='text-white'>
        ProductPage
      
    </div>
  )
}

export default ProductPage
