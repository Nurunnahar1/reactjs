import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const hello = useRef(null);

  useEffect(() => {
    if (hello.current) {
      hello.current.style.color = "green";
    }
  }, []);

  return (
    <>
      <div className="counter">
        <h1 ref={hello}>Hello Everyone.......</h1>
      </div>
    </>
  );
}

export default App;
