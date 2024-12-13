import React from 'react';
import MethodSelection from './methods/MethodSelection';

const TopLeft = ({ method, setMethod }) => {
  return (
    <div style={{ borderBottom: '1px solid rgb(232, 232, 232 , 0.2)' }}>
      <MethodSelection method={method} setMethod={setMethod} />
    </div>
  );
};

export default TopLeft;
