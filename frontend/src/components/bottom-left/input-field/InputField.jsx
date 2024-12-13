import React, { useState } from 'react'
import './InputField.css'

const InputField = ({expression , handleChange}) => {

  return (
    <div className='InputField'>
      <div><h2>F(x) : </h2></div>
      <input type='text' value={expression} placeholder='x^3-5*x-5' onChange={()=>alert("USE KEYBOARD!")}/>
    </div>
  )
}

export default InputField