function ProductCard({product}) {
  return (
    <div className="bg-white rounded-lg border-gray-800 
    mb-3 p-4">
      <h1 className='text-lg font-bold'>{product.name}</h1>
      <h2 className='text-2xl text-slate-600'>{product.price}</h2>
      <p>{product.description}</p>
      </div>
  )
}

export default ProductCard
