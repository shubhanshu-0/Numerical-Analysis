import React from 'react'
import { toast } from 'sonner'
import './RangeSelector.css'

const ManualRange = () => {
  return (
    <div className='manual-range' onClick={()=>{toast.info("UPCOMING FEATURE !")}}>
        <h3>MANUAL RANGE</h3>
    </div>
  )
}

export default ManualRange
