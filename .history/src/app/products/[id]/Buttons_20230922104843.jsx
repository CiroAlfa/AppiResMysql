import React from 'react'

function Buttons() {
  return (
    <div className='flex gap-x-2 justify-end mt-2'>
        <button className=' text-white bg-red-500 hover:bg-red-700 py-2 px 
        rounded'>
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
