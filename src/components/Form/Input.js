import React, {useState} from "react";

let Input = (props) =>{
    const [classes,setClasses] = useState('');
    if(props.className !== '' || props.className !== undefined){
        setClasses(props.className)
    };
    const id = props.id;
    const name = props.name;
    const placeholder = props.placeholder;
    const types = props.type;
    return (
        <input type={types} className={classes} id={id} name={name} placeholder={placeholder}/>
      );
}

export default Input;