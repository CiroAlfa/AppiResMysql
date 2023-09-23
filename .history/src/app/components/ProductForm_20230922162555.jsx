"use client"
import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation'

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ","
    });
    const [file, setFile]= useState(null);
    const form = useRef(null);
    const router = useRouter()
    const params = useParams()
    console.log(params)

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
      
    };
    useEffect(() => {
        if(params.id) {
          axios.get('/api/products/' + params.id)
          .then(res=>{
            setProduct({
                name: res.data.name,
                price: res.data.price,
                description: res.data.description
            });

            console.log('cargar datos')
        });
    }
    },[]);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!params.id){
            const formData = new FormData()
            FormData.append('name', product.name)
            FormData.append('price', product.price)
            FormData.append('description', product.description)
            FormData.append('image', file)
            console.log(formData)

            const res = await axios.post('/api/products', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);           
        }   else {
            const res  = await axios.put("/api/products/" + params.id, product)
            console.log(res);
           
        }
        form.current.reset();   
        router.refresh()
        router.push('/products')

    };

    return (
        <div className="flex">
            <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
            ref={form}>
                
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
                value={product.name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950"
                autoFocus
            />

            <label

                htmlform="price"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Product Price
            </label>
            <input
                name="price"
                type="text" placeholder="00.00" 
                onChange={handleChange}
                value={product.price}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950"
            />

            <label
                htmlform="name"
                className="block text-gray-700 text-sm font-bold mb-2"
            >Product Description</label>
            <textarea
                name="description"
                rows={3} placeholder="description" 
                onChange={handleChange}
                value={product.description}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-950" 
                />


            <label
                htmlFor="productImage"
                className="block text-gray-700 text-sm font-bold mb-2"
            >
              Product Image
            </label>
            <input type="file"
             className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-slate-950"
             onChange={(e)=>{
                setFile(e.target.files[0]);
             }} 
            />
                    {file &&(
                        <img
                            className="w-96 object-contain mx-auto my-4"
                            src={URL.createObjectURL(file)}
                            alt=""
                        />
                    )}


            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bo 
     py-2 px-4 rounded">
                 {params.id ? "Update Product" : "Create Product"}
            </button>
        </form>
        
        
        </div>

        
    );
}

export default ProductForm
