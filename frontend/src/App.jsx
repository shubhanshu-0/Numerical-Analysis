import './App.css';
import BottomLeft from './components/bottom-left/BottomLeft';
import Right from './components/right/Right';
import { Toaster } from 'sonner'
import { useState } from 'react';

function App() {
  const [method, setMethod] = useState(null);
  const [expression, setExpression] = useState("");
  const [iterations, setIterations] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App w-full">
      <Toaster position='top-center' richColors />

      <div className="header mb-8">
        <h1 className='text-4xl text-center pt-4'>Numerical Analysis</h1>
      </div>


      <div className=" w-full min-w-screen flex h-full lg:flex-col sm:text-sm">

        <div className="left-container w-1/2 lg:w-full  h-full p-4">
          <BottomLeft method={method} setMethod={setMethod} expression={expression} setExpression={setExpression} setIterations={setIterations} setLoading={setLoading} />
        </div>


        <div className="right-container w-1/2 lg:w-full p-4">
          <Right method={method} iterations={iterations} setIterations={setIterations} loading={loading}/>
        </div>

      </div>


    </div>
  );
}

export default App;
