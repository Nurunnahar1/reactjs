import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [input , setInput] = useState("");

    const handleChangeInc = () => {
        // setCount(count + 1  )
          setCount((prevState) => {
            return prevState + 1;
          });
     }
    const handleChangeDesc = () => {
        // setCount(count - 1);
        
        setCount((prevState) => {
            return prevState - 1;
        })
    };
    const handleChangeReset = () => {
    

      setCount(0 );
    };
    const handleChangeSet = () => {
      setCount(input);
    };
        
    const handleInputChange = (e) => {
          setInput(e.target.value); 
    };
        

    return (

        <>
            <div className="counter">
                <h1 >{ count}</h1>
                <hr />
                <br />
                <button onClick={handleChangeInc}>++</button> 
                <button onClick={handleChangeDesc}>--</button> 
                <button onClick={handleChangeReset}>Reset</button> 
                <button onClick={handleChangeSet}>Set</button> 
                <input type="text" value={input} onChange={handleInputChange} />
            </div>
        
        </>  
    );
}
export default Counter;