import React, { useState } from 'react';
import './methods.css';

const MethodSelection = ({ method, setMethod }) => {

 const [methodStatus, setMethodStatus] = useState([
    {
        id: 1,
        name: 'Bisection Method',
        route: 'bisection',
        status: 0,
        description: "The Bisection Method is a root-finding method that repeatedly divides an interval into halves and selects the subinterval in which the root lies. It is simple and guarantees convergence for continuous functions."
    },
    {
        id: 2,
        name: 'Regula Falsi Method',
        route: 'regulaFalsi',
        status: 0,
        description: "The Regula Falsi Method, or False Position Method, is a root-finding technique that uses a linear interpolation between two points of opposite signs. It converges faster than the Bisection Method in certain cases."
    },
    {
        id: 3,
        name: 'Secant Method',
        route: 'secant',
        status: 0,
        description: "The Secant Method is an iterative root-finding method that approximates the root by using a line through two recent approximations. It is faster than the Bisection and Regula Falsi methods but does not guarantee convergence."
    },
    {
        id: 4,
        name: 'Newton-Raphson Method',
        route: 'newtonRaphson',
        status: 0,
        description: "The Newton-Raphson Method is a powerful root-finding algorithm that uses the derivative of the function to iteratively find a root. It converges rapidly when close to the solution but requires a good initial guess."
    },
]);


  const [methodDescription, setMethodDescription] = useState("");

  const selectMethod = (selectedMethod) => {
    setMethod(selectedMethod);
    setMethodDescription(selectedMethod.status ? selectedMethod.description : "");
  };

  const methodOn = (methodToUpdate) => {
    const updatedMethodStatus = methodStatus.map((m) => {
      if (m.id === methodToUpdate.id) {
        m.status = 1 - m.status; 
        selectMethod(m); 
      } else {
        m.status = 0;
      }
      return m;
    });
    
    setMethodStatus(updatedMethodStatus);
  };

  return (
    <div className="select-methods">
      <div className='methods-box'>
        {methodStatus.map((method) => (
          <button
            key={method.id}
            className="method-name"
            onClick={() => methodOn(method)}
            style={{
              border: `1px solid ${method.status === 1 ? 'green' : 'rgba(180, 0, 0, 0.6)'}`, 
              color: 'white',
            }}
          >
            <h2>{method.name}</h2>
          </button>
        ))}
      </div>
      {/* <div className='method-description'>
        <p>{methodDescription}</p>
      </div> */}
    </div>
  );
};

export default MethodSelection;
