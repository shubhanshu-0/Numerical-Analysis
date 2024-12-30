import React from 'react'
import AutoRange from './AutoRange'
import ManualRange from './ManualRange'

const RangeSelector = () => {
  return (
    <div className='range-selector-container'>
        <div className='range-selectors'>
          <ManualRange/>
          <AutoRange/>
        </div>
    </div>
  )
}

export default RangeSelector
