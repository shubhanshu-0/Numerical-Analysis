import React, { useState } from 'react'
import InputField from './input-field/InputField'
import Keyboard from './keyboard/Keyboard'
import ManualRange from './range-selector/ManualRange'
import AutoRange from './range-selector/AutoRange'
import MethodSelection from '../top-left/methods/MethodSelection'

const BottomLeft = ({ method, setMethod, expression, setExpression, setIterations, setLoading }) => {

  // const [expression , setExpression] = useState("");

  const handleChange = (value) => {
    setExpression(value);
  }

  return (
    <div className='w-full h-full border border-gray rounded-3xl p-4 '>

      <InputField expression={expression} handleChange={handleChange} />


      <div className="method_and_range flex flex-col gap-4 mt-6 mb-6">

        <div className="methods">
          <MethodSelection setMethod={setMethod} />
        </div>


        <div className="range grid grid-cols-5 text-center gap-2 sm:text-sm">
          <h2 className='inline m-auto'>Range :</h2>
          <button className=' p-2 border-0 rounded-full bg-l-hilight mr-2 sm:text-sm sm:p-1'>
            <AutoRange />
          </button>
          <button className='p-2 border-0 rounded-full bg-d-gray mr-2 text-gray-600 sm:text-sm sm:p-1' >
            <ManualRange />
          </button>
        </div>

      </div>




      <Keyboard method={method} expression={expression} setExpression={setExpression} setIterations={setIterations} setLoading={setLoading} ></Keyboard>

    </div>
  )
}

export default BottomLeft
