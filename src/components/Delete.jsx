import React from 'react'

function DeleteButton({ operator, onclick }) {
    return (
        <button
            onClick={() => onclick()}
            className='bg-purple-400 opacity-70 font-semibold rounded-full text-purple-800'>
            {operator}
        </button>
    )
}

export default DeleteButton
