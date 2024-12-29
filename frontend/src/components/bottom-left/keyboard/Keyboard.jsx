import React from 'react'
import axios from 'axios';
import { toast } from 'sonner';


const Keyboard = ({ method, expression, setExpression, setIterations, setLoading }) => {

  const symbols = ['1', '2', '3', 'AC', 'Del', '4', '5', '7', '+', '-', '7', '8', '9', '/', '*', '0', '(', ')', '^', 't'];

  const handleClick = (symbol) => {
    if (symbol == 'AC') {
      setExpression('');
    } else if (symbol == 'Del') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + symbol);
    }
  }

  const generate = async () => {

    if (method.status == 0) {
      toast.error("Select a Method First !");
      return;
    }
    if (expression == "") {
      toast.error("Enter an Expression First !");
      return;
    }

    setLoading(true);
    const transformedExpression = expression.replaceAll('t', 'x');

    let result = await axios({
      method: 'post',
      url: `https://numerical-analysis.onrender.com/api/methods/${method.route}`,
      data: {
        expression: `${transformedExpression}`,
        range: []
      }
    });

    // console.log(result);
    setIterations(result.data.iterations);
    setLoading(false);
  }

  return (
    <div className='keyboard-container'>
      <div className='symbols grid grid-cols-5'>
        {
          symbols.map((symbol, index) => (
            <button
              key={index}
              onClick={() => handleClick(symbol)}
              className='p-4  m-2 bg-d-gray border-0 rounded-2xl text-lg sm:text-sm sm:p-2'
            >
              {symbol}
            </button>
          ))
        }
      </div>

      <button className='bg-l-hilight mt-4 border-0 rounded-3xl p-4 w-full' onClick={generate}><h2>Generate Iterations</h2></button>
    </div>
  )
}

export default Keyboard