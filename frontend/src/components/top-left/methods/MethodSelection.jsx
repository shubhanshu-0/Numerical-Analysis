import React, { useState } from 'react';

const MethodSelection = ({ method, setMethod }) => {

  const [methodStatus, setMethodStatus] = useState([
    {
      id: 1,
      name: 'Bisection',
      route: 'bisection',
      status: 0,
      description: "The Bisection Method is a root-finding method that repeatedly divides an interval into halves and selects the subinterval in which the root lies. It is simple and guarantees convergence for continuous functions."
    },
    {
      id: 2,
      name: 'Regula Falsi',
      route: 'regulaFalsi',
      status: 0,
      description: "The Regula Falsi Method, or False Position Method, is a root-finding technique that uses a linear interpolation between two points of opposite signs. It converges faster than the Bisection Method in certain cases."
    },
    {
      id: 3,
      name: 'Secant',
      route: 'secant',
      status: 0,
      description: "The Secant Method is an iterative root-finding method that approximates the root by using a line through two recent approximations. It is faster than the Bisection and Regula Falsi methods but does not guarantee convergence."
    },
    {
      id: 4,
      name: 'Newton-Raphson',
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
    <div className='grid grid-cols-5 gap-2 text-center'>
      <h2 className='inline m-auto'>Method :</h2>

      {methodStatus.map((method) => (
        <button
          key={method.id}
          className={`px-2 py-1 border-0 rounded-full  mr-2  sm:p-1 !sm:text-sm overflow-clip
             ${method.status ? 'bg-l-hilight' : 'bg-d-gray text-subtle hover:text-gray-300'}`}
          onClick={() => methodOn(method)}
        >
          {method.name}
        </button>
      ))}

      {/* <div className='method-description'>
        <p>{methodDescription}</p>
        </div> */}
    </ div>
  );
};

export default MethodSelection;
