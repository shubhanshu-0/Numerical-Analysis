import React, { useState } from 'react'
import { toast } from 'sonner'

const InputField = ({expression , handleChange}) => {

  return (
    <div className='InputField'>
      <input type='text' value={expression} 
              placeholder='Expression (eg . t^3-5*t-5)'
              onChange={()=>toast.warning("USE ON SREEN KEYBOARD!")}
              className='w-full p-2 px-4 flex justify-center items-center border-0 rounded-xl text-xl'
      />
    </div>
  )
}

export default InputField