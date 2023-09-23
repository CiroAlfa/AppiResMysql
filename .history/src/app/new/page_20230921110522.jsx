import { useState } from "react";
function NewPage() {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        description: ","
    });
    const handleChange = (e) => {
        console.log(e);
    };

    return (
        <div>
            <form>
            <label htmlForm="name">Product Name</label>
            <input type="text" placeholder="Name" onChange={handleChange} />

            <label htmlForm="price">Product Price</label>
            <input type="text" placeholder="00.00" onChange={handleChange} />

            <label htmlForm="name">Product Description</label>
            <input type="text" placeholder="description" onChange={handleChange} />
            </form>
        </div>
    );
}

export default page
