import { useState } from "react";
import "./inc-desc.css";


const IncDesc = () => {
    const [state, setState] = useState(0);
    const handleBtnInc = () => {
        setState(state + 1);
    };
    const handleBtnDesc = () => {
      setState(state - 1);
    };

    return (
      <>
        <h1>{state}</h1>
        <button className="inc" onClick={() => handleBtnInc()}>
          ++
        </button>
        <button className="desc" onClick={() => handleBtnDesc()}>
          --
        </button>
      </>
    );
}
export default IncDesc;