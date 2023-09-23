import axios from 'axios'

function loadProduct(productId){
    axios.get('http://localhost:3000/api/products/' + productId)
}

function ProductPage({ params }) {
   loadProduct(params.id)
  return (
    <div className='text-white'>
        ProductPage
      
    </div>
  )
}

export default ProductPage
