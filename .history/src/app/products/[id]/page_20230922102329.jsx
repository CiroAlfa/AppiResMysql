import React from 'react';
import axios from 'axios';

async function loadProduct(productId) {
    const { data } = await axios.get('http://localhost:3000/api/products/' + productId);
    return data;
}

function ProductPage({ params }) {
    return (
        <ClientComponent productId={params.id} />
    );
}

function ClientComponent({ productId }) {
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        loadProduct(productId).then(setProduct);
    }, [productId]);

    if (product === null) {
        return <div>Loading...</div>;
    }

    return (
        <section className='flex justify-center items-center'>
            <div className='p-6 bg-white'> 
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <div className='flex gap-x-2 justify-end'>
                    <button className=' text-white bg-red-500 hover:bg-red-700 py-2 px rounded'>
                        delete
                    </button>
                    <button className=' text-white bg-gray-500 hover:bg-gray-700 py-2 px rounded'>
                        Edit 
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProductPage;
