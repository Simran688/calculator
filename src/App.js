import React,{useState} from 'react';
import "./styles.css" 

function App() {

  const [result,setResult]=useState("");

  const clickHandler=(e)=>{
    setResult(result.concat(e.target.value))
  }
  
  const clearDisplay=()=>{
    setResult("");
  }

  const calculate=()=>{

    // setResult(eval(result).toString());

    let userInput = result;
    let total = Function("return " + userInput)();
    setResult(total.toString());
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* <div className="current-operand"> */}
          <input className="current-operand" type="text" placeholder='0' value={result} />
        {/* </div> */}
        
      </div>
      <input type="button" value="AC" className="span-two" onClick={clearDisplay}/>
      <input type="button" value="%" onClick={clickHandler}/>
      <input type="button" value="/" onClick={clickHandler}/>
      <input type="button" value="1" onClick={clickHandler}/>
      <input type="button" value="2" onClick={clickHandler}/>
      <input type="button" value="3" onClick={clickHandler}/>
      <input type="button" value="*" onClick={clickHandler}/>
      <input type="button" value="4" onClick={clickHandler}/>
      <input type="button" value="5" onClick={clickHandler}/>
      <input type="button" value="6" onClick={clickHandler}/>
      <input type="button" value="+" onClick={clickHandler}/>
      <input type="button" value="7" onClick={clickHandler}/>
      <input type="button" value="8" onClick={clickHandler}/>
      <input type="button" value="9" onClick={clickHandler}/>
      <input type="button" value="-" onClick={clickHandler}/>
      <input type="button" value="." onClick={clickHandler}/>
      <input type="button" value="0" onClick={clickHandler}/>
      <input type="button" value="=" className="span-two" onClick={calculate}/>
    </div>
  )
}

export default App