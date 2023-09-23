"use client"
import { useRef, useState } from "react";
import axios from 'axios';

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ","
    });
    const form = useRef(null)
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
      
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();        
        const res = await axios.post('/api/products', product)
        console.log(res);
        form.current.reset(); 

       

    return (
        <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}>
                ref={form}
            <label
                htmlform="name"
                className="block text-gray-700 text-sm font-bold mb-2"
            >
                Product Name:
            </label>
            <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950"
            />

            <label

                htmlform="price"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Product Price
            </label>
            <input
                name="price"
                type="text" placeholder="00.00" onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950"
            />

            <label
                htmlform="name"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Product Description</label>
            <textarea
                name="description"
                rows={3} placeholder="description" onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950" />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bo 
     py-2 px-4 rounded">
                Save Product
            </button>
        </form>
    )
}
}
export default ProductForm
