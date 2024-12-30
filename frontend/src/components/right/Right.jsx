import React, { useEffect } from 'react'

const Right = ({ method, iterations, setIterations, loading}) => {

  useEffect(() => {
    if (iterations.length == 0) {
      let temp = [];
      temp.push({
        step: "Step",
        x: "Calc(x)",
        f_x: "F(x)"
      })
      for (let i = 0; i < 10; i++) {
        temp.push({
          step: i + 1,
          x: 0,
          f_x: 0
        })
      }
      setIterations(temp);
    }
  }, []);

  return (
    <div className='border border-gray rounded-3xl p-4 w-full h-full relative'>

      <div className={`absolute left-0 top-0 border-0 rounded-3xl w-full h-full filter backdrop-blur-md z-20 bg-transparent
          ${loading? '' : 'invisible'}
        `}></div>

      <h1 className='text-center text-3xl mb-4'>Iterations</h1>

      <div className="text-center">
        {
          iterations.map((val, index) => (

            <div key={index} className='grid grid-cols-3'>

              <div className={`p-2 border-r-2 border-gray-900 ${index===0 ? 'text-cyan-400' : ''}`}>
                {val.step}
              </div>
              <div className={`p-2 border-r-2 border-gray-900 ${index===0 ? 'text-cyan-400' : ''}`}>
                {val.x}
              </div>
              <div className={`p-2 ${index===0 ? 'text-cyan-400' : ''}`}>
                {val.f_x}
              </div>

            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Right
