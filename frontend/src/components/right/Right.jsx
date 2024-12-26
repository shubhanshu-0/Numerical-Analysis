import React, { useEffect } from 'react'
import './Right.css'

const Right = ({method , iterations , setIterations}) => {

  useEffect(()=>{
      if(iterations.length == 0){
        let temp = [];
        temp.push({
            step : "Step" , 
            x : "Calc(x)" , 
            f_x : "F(x)"
          })
          for(let i = 0; i < 10 ; i++){
            temp.push({
              step : i+1 , 
              x : 0 , 
              f_x : 0
            })
          }
          setIterations(temp);
      }
  }, []);

  return (
    <div style={{width : '100%'}}>
      <h1 style={{textAlign:'center' , padding:'25px'}}>ITERATIONS</h1>
      
      <div className="iterations">
        {
          iterations.map((val , index) => (
            <div key={index} className='iteration'>
              <div className='iteration-column'>
                <h2>{val.step}</h2>
              </div>
              <div className='iteration-column'>
                <h2>{val.x}</h2>
              </div>
              <div className='iteration-column'>
                <h2>{val.f_x}</h2>
              </div>
            </div> 
          ))
        }
      </div>
    </div>
  )
}

export default Right
