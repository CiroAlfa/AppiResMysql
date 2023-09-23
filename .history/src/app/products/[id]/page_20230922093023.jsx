function loadProduct(productId){
    console.log(productId)
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
