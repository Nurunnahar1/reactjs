import { useRef } from "react";

const Countar = () => {
  const hello = useRef(null);
  hello.current.style.color = "green";
  return (
    <>
      <div className="counter">
        <h1 ref={hello}>Hello Everyone.......</h1>
      </div>
    </>
  );
};

export default Countar;
