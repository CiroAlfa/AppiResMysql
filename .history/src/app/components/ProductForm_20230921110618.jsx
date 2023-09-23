import React from 'react'

function ProductForm() {
  return (
    <form>
    <label htmlForm="name">Product Name</label>
    <input type="text" placeholder="Name" onChange={handleChange} />

    <label htmlForm="price">Product Price</label>
    <input type="text" placeholder="00.00" onChange={handleChange} />

    <label htmlForm="name">Product Description</label>
    <input type="text" placeholder="description" onChange={handleChange} />
    </form>
  )
}

export default ProductForm
