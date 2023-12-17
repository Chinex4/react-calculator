import React from 'react'

function DigitButton({ digit, onclick }) {
    return (
        <button
            onClick={() => onclick(digit)}
            className='bg-[#152046] opacity-70 font-semibold rounded-full text-white'>
            {digit}
        </button>
    )
}

export default DigitButton
