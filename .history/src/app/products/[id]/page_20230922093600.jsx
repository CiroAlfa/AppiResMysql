import axios from 'axios'

async function loadProduct(productId) {
    const res = await axios.get('http://localhost:3000/api/products/' + productId);
    console.log(res)
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
