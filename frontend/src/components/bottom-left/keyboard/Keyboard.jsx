import React from 'react'
import './Keyboard.css'
import axios from 'axios';

const Keyboard = ({method , expression , setExpression , setIterations}) => {

    const symbols = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ,'x' , '(' , ')' , '/' , '*' , '+' , '-' , '^' , '=' , 'del' , 'ac'];

    const handleClick = (symbol) => {
      if(symbol == 'ac') {
        setExpression('');
      }else if(symbol == 'del'){
        setExpression(expression.slice(0 , -1));
      }else {
        setExpression(expression+symbol);
      }
    }

    const generate = async () => {
      
        if(method.status == 0){
          alert("Select a Method First !");
          return;
        }
        if(expression == ""){
          alert("Enter an Expression First !");
          return;
        }

        let result = await axios({
          method : 'post' ,
          url : `https://numerical-analysis.onrender.com/api/methods/${method.route}` , 
          data : {
            expression : `${expression}` ,
            range : []
          }
        });
  
        // console.log(result);
        setIterations(result.data.iterations);

    }

    return (
      <div className='keyboard-container'>
          <div className='symbols'>
              {
                symbols.map((symbol , index) => (
                    <button key={index} onClick={()=>handleClick(symbol)}><h1>{symbol}</h1></button>
                ))
              }
          </div>
          <button className='gen-itrs' onClick={generate}><h2>Generate Iterations</h2></button>
      </div>
  )
}

export default Keyboard