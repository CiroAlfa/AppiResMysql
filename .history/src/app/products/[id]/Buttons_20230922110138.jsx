'use client'
import axios from 'axios'

function Buttons({productId}) {
  return (
    <div className='flex gap-x-2 justify-end mt-2'>
        <button className=' text-white bg-red-500 hover:bg-red-700 py-2 px 
        rounded'
        onClick={async () =>{
            if(confirm('are you sure want to delete this product?')){
                const res = await axios.delete('/api/product/' + productId)
                console.log(res)
            }
            }}>
         
            
            delete
        </button>
        <button className=' text-white bg-gray-500 hover:bg-gray-700 py-2 px 
        rounded'>
            Edit 
        </button>
    </div>
  )
}

export default Buttons
