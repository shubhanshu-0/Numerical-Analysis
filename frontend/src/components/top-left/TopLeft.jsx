import React from 'react';
import MethodSelection from './methods/MethodSelection';

const TopLeft = ({ method, setMethod }) => {
  return (
    <div >
      <MethodSelection method={method} setMethod={setMethod} />
    </div>
  );
};

export default TopLeft;
