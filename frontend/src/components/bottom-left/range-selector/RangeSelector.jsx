import React from 'react'
import AutoRange from './AutoRange'
import ManualRange from './ManualRange'
import './RangeSelector.css'

const RangeSelector = () => {
  return (
    <div className='range-selector-container'>
        <div><h1>RANGE : </h1></div>
        <div className='range-selectors'>
          <ManualRange/>
          <AutoRange/>
        </div>
    </div>
  )
}

export default RangeSelector
