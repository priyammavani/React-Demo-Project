import "./UseState.css";
import { useState, useEffect } from "react";
const UseEffect = () => {
  const [num, setNum] = useState(10);

    useEffect(()=>{
       document.title = `Chats(${num})`;
    });
  
  return (
    <>
      <div className="center_div">
        <p>{num}</p>
        <span>Use Effect</span>
        <div className="button2" onClick={()=>setNum(num+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
