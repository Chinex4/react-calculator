import React from 'react'

function EqualButton({ equalsign, onclick }) {
    return (
        <button
            onClick={() => onclick()}
            className='bg-purple-400 opacity-70 font-semibold rounded-full text-purple-800 row-span-2'>
            {equalsign}
        </button>
    )
}

export default EqualButton
