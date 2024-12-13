import './App.css';
import TopLeft from './components/top-left/TopLeft';
import BottomLeft from './components/bottom-left/BottomLeft';
import Right from './components/right/Right';
import { useState } from 'react';

function App() {
  const [method , setMethod] = useState(null);
  const [expression , setExpression] = useState("");
  const [iterations , setIterations] = useState([]);

  return (
    <div className="App">
      <div className="header">
          <h1 style={{fontWeight: '300', textShadow: '1px 1px 15px rgb(195, 245, 250)' }}>NUMERICAL ANALYSIS</h1>
      </div>
      
      <div className="container">
        <div className="left-container">
          <TopLeft method={method} setMethod={setMethod} />
          <BottomLeft method={method} expression={expression} setExpression={setExpression} setIterations={setIterations}/>
        </div>
        
        <div className="right-container" >
          <div className="iteration-table">
            <Right method={method} iterations={iterations} setIterations={setIterations}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
