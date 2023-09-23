import axios from 'axios';

async function loadProduct(productid) {
    const { data } = await axios.get('http://localhost:3000/api/products'+productid
    );
    return data;
}

async function ProductPage({ params }) {
    const product = await loadProduct(params.id);
    console.log(product)
    return (
        <div className='text-white'>
            ProductPage

        </div>
    )
}

export default ProductPage;