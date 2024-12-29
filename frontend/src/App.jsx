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
    <div className="App w-full h-screen max-h-screen">
      <Toaster position='top-center' richColors />

      <div className="header">
        <h1 className='text-4xl text-center pt-4 flex justify-center items-center'>Numerical Analysis</h1>
      </div>


      <div className="main-content w-full p-4  flex gap-4 lg:flex-col sm:text-sm ">

        <div className="left-container w-1/2 lg:w-full">
          <BottomLeft method={method} setMethod={setMethod} expression={expression} setExpression={setExpression} setIterations={setIterations} setLoading={setLoading} />
        </div>


        <div className="right-container w-1/2 lg:w-full ">
          <Right method={method} iterations={iterations} setIterations={setIterations} loading={loading}/>
        </div>

      </div>


    </div>
  );
}

export default App;
