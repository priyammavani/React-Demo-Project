import "./UseState.css";
import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === 'INCR'){
        return state = state + 1;
    }else if(state > 0 && action.type === 'DECR'){
        return state = state - 1;
    }else{
        return state;
    }
}

const UseReducer = () => {
//   const [num, setNum] = useState(10);
    const intialData = 10;
  const [state, dispatch] = useReducer(reducer, intialData);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <span>Use Reducer</span>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
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

export default UseReducer;
