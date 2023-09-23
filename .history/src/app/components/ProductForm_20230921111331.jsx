"use client"
import { useState } from "react";

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ","
    });
    const handleChange = (e) => {
        console.log(e);
    };
  return (
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4">
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
