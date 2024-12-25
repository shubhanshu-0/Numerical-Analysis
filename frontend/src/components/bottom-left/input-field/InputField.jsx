import React, { useState } from 'react'
import './InputField.css'
import { toast } from 'sonner'

const InputField = ({expression , handleChange}) => {

  return (
    <div className='InputField'>
      <input type='text' value={expression} 
              placeholder='Expression (eg . t^3-5*t-5)'
              onChange={()=>toast.warning("USE ON SREEN KEYBOARD!")}
      />
    </div>
  )
}

export default InputField