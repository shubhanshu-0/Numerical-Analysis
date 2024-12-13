import React, { useState } from 'react'
import InputField from './input-field/InputField'
import RangeSelector from './range-selector/RangeSelector'
import Keyboard from './keyboard/Keyboard'
import './BottomLeft.css'

const BottomLeft = ({method , expression , setExpression , setIterations}) => {

  // const [expression , setExpression] = useState("");

  const handleChange = (value) => {
    setExpression(value);
  }

  return (
    <div className='BottomLeft'>  
        <InputField expression={expression} handleChange={handleChange}></InputField>
        <RangeSelector></RangeSelector>
        <Keyboard method={method} expression={expression} setExpression={setExpression} setIterations={setIterations}></Keyboard>
    </div>
  )
}

export default BottomLeft
