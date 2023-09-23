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
    <label
     htmlForm="name"
     className="block text-gray-700 text-sm font-bold mb-2"
     >
      Product Name:
      </label>
    <input type="text" placeholder="Name" onChange={handleChange} 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950"
    />

    <label 
    htmlForm="price"
    className="block text-gray-700 text-sm font-bold mb-2"
    >Product Price</label>
    <input type="text" placeholder="00.00" onChange={handleChange} />

    <label
     htmlForm="name"
     className="block text-gray-700 text-sm font-bold mb-2"
     >Product Description</label>
    <input type="text" placeholder="description" onChange={handleChange} />
    </form>
  )
}

export default ProductForm
