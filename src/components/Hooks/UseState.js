import "./UseState.css";
import { useState } from "react";
const UseState = () => {
  const [num, setNum] = useState(10);

  return (
    <>
      <div className="center_div">
        <p>{num}</p>
        <span>Use State</span>
        <div className="button2" onClick={()=>setNum(num+2)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=> num > 0 ? setNum(num-2) : setNum(0)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
