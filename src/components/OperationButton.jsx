import React from 'react'

function OperationButton({ operator, onclick }) {
    return (
        <button
            onClick={() => onclick(operator)}
            className='bg-purple-400 opacity-70 font-semibold rounded-full text-purple-800'>
            {operator}
        </button>
    )
}

export default OperationButton
