import React from 'react'

function ClearButton({ clearkey, onclick }) {
    return (
        <button
            onClick={() => onclick()}
            className='bg-red-300 opacity-70 font-semibold rounded-full text-red-600'>
            {clearkey}
        </button>
    )
}

export default ClearButton
