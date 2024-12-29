import React from 'react'
import { toast } from 'sonner'

const ManualRange = () => {
  return (
    <div className='manual-range' onClick={()=>{toast.info("UPCOMING FEATURE !")}}>
        <p>Manual </p>
    </div>
  )
}

export default ManualRange
