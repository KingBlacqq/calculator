import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [ result, setResult ] = useState(0);

  const evaluateInput = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error'); 
    }
  };

  useEffect(() => {
    evaluateInput();
  }, [input]);

  const handleButtonClick = (e) => {
    setInput((prevInput) => prevInput + e);
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };
  

  const handleBackspaceClick = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

 
    
  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} readOnly  />
      </form>
      <div className="result">
        <h2>{result}</h2>
      </div>
      <div className="keypad">
        <button className="highlight" onClick={() => clearInput()} id="clear">
          Clear
        </button>
        <button className="highlight" onClick={handleBackspaceClick} id="backspace">
          C
        </button>
        <button className="highlight" onClick={() => handleButtonClick('/')}>
          &divide;
        </button>
        <button onClick={() => handleButtonClick('7')}>
          7
        </button>
        <button  onClick={() => handleButtonClick('8')}>
          8
        </button>
        <button onClick={() => handleButtonClick('9')}>
          9
        </button>
        <button className="highlight"  onClick={() => handleButtonClick('*')}>
          &times;
        </button>
        <button  onClick={() => handleButtonClick('4')}>
          4
        </button>
        <button  onClick={() => handleButtonClick('5')}>
          5
        </button>
        <button  onClick={() => handleButtonClick('6')}>
          6
        </button>
        <button className="highlight"  onClick={() => handleButtonClick('-')}>
          &ndash;
        </button>
        <button  onClick={() => handleButtonClick('1')}>
          1
        </button>
        <button  onClick={() => handleButtonClick('2')}>
          2
        </button>
        <button  onClick={() => handleButtonClick('3')}>
          3
        </button>
        <button className="highlight" onClick={() => handleButtonClick('+')}>
          +
        </button>
        <button  onClick={() => handleButtonClick('0')}>
          0
        </button>
        <button onClick={() => handleButtonClick('.')}>
          .
        </button>
        <button className="highlight" onClick={() => evaluateInput()} id="result">
          =
        </button>
      </div>
     
    </div>
  );
};

export default Calculator;
