import { useState } from 'react'
import './App.css'
import DigitButton from './components/DigitButton'
import ZeroButton from './components/ZeroButton'
import EqualButton from './components/EqualButton'
import OperationButton from './components/OperationButton'
import ClearButton from './components/ClearButton'
import DeleteButton from './components/Delete'

function App() {
  const [expression, setExpression] = useState('')

  const addDigit = (digit) => {
    if (digit === '0' && expression === '0') {
      return expression
    }
    if (digit === '.' && expression.includes(".")) {
      return expression
    }
    setExpression(prevDigit => prevDigit + digit)
  }
  const chooseOperation = (operator) => {
    if (expression === '') {
      return expression
    }
    // if (expression.includes('+', 0) || expression.includes('-', 0) || expression.includes('*', 0) || expression.includes('/', 0)) {
    //   return expression
    // }
    if (expression.includes(operator)) {
      return expression
    }
    setExpression(prevOperator => prevOperator + operator)
  }
  const clear = () => {
    setExpression('')
  }
  const evaluate = () => {
    try {
      setExpression(prevEx => eval(prevEx).toString())
    } catch (error) {
      setExpression('Error!')
    }
  }
  const deleteValue = () => {
    setExpression(prevValue => prevValue.slice(0, -1))
  }

  return (
    <>
      <div className='w-full min-h-screen bg-gradient-to-br from-purple-950 to-pink-500 flex items-center justify-center'>
        <div className='relative w-[350px] md:w-[400px] h-[600px] bg-black space-y-8 rounded-xl shadow-2xl px-6 py-10'>
          <div className='w-full border rounded h-[100px] py-6 px-4 text-white whitespace-pre-line flex items-center justify-end overflow-auto transition-all'>
            <p className='text-2xl font-semibold'>{expression}</p>
          </div>

          <div className='w-full grid grid-cols-4 grid-row-4 gap-4 h-[400px]'>
            <ClearButton onclick={clear} clearkey='C' />
            <OperationButton onclick={chooseOperation} operator='/' />
            <OperationButton onclick={chooseOperation} operator='*' />
            <DeleteButton onclick={deleteValue} operator='DEL' />

            <DigitButton onclick={addDigit} digit='7' />
            <DigitButton onclick={addDigit} digit='8' />
            <DigitButton onclick={addDigit} digit='9' />
            <OperationButton onclick={chooseOperation} operator='-' />

            <DigitButton onclick={addDigit} digit='4' />
            <DigitButton onclick={addDigit} digit='5' />
            <DigitButton onclick={addDigit} digit='6' />
            <OperationButton onclick={chooseOperation} operator='+' />

            <DigitButton onclick={addDigit} digit='1' />
            <DigitButton onclick={addDigit} digit='2' />
            <DigitButton onclick={addDigit} digit='3' />
            <EqualButton onclick={evaluate} equalsign='=' />

            <ZeroButton onclick={addDigit} zerokey='0' />
            <DigitButton onclick={addDigit} digit='.' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
