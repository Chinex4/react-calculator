import React from 'react'

function ZeroButton({ zerokey, onclick }) {
    return (
        <button
            onClick={() => onclick(zerokey)}
            className='bg-[#152046] opacity-70 font-semibold rounded-full text-white col-span-2'>
            {zerokey}
        </button>
    )
}

export default ZeroButton
