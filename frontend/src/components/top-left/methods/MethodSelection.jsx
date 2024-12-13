import React, { useState } from 'react';
import './methods.css';

const MethodSelection = ({ method, setMethod }) => {

  const [methodStatus, setMethodStatus] = useState([
    {
      id: 1,
      name: 'Bisection Method',
      route : 'bisection' ,
      status: 0,
      description: "bisectionmethod"
    },
    {
      id: 2,
      name: 'Regula Falsi Method',
      route : 'regulaFalsi' ,
      status: 0,
      description: "regulafalsimethod"
    },
    {
      id: 3,
      name: 'Secant Method',
      route : 'secant' ,
      status: 0,
      description: "secantmethod"
    },
    {
      id: 4,
      name: 'Newton-Raphson Method',
      route : 'newtonRaphson' ,
      status: 0,
      description: "newtonraphsonmethod"
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
      <div className='method-description'>
        <p>{methodDescription}</p>
      </div>
    </div>
  );
};

export default MethodSelection;
