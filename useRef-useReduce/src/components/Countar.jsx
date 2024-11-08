import { useReducer } from "react";
const countReducer = (state, action) => {
  switch (action.type) {
    case "COUNTDESC":
      return state - 1;

    case "COUNTINC":
      return state + 1;

    case "COUNTSET":
      return 0;
  }
}
 

const Countar = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
      <div className="counter">
        <h1>{count} </h1>
        <br />
        <hr />
        <button onClick={()=>dispatch({type:"COUNTDESC"})}>--</button>
        <button onClick={()=>dispatch({type:"COUNTINC"})} >++</button> 
        <button onClick={()=>dispatch({type:"COUNTSET"})} >Set</button> 
      </div>
    </>
  );
};

export default Countar;
