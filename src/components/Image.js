import React, {useState,useEffect} from 'react';

let Image = (props) =>{
    const [classes,setClasses] = useState('');
    const [srcs,setSrcs] = useState('');
    const [alts,setAlts] = useState('');
    useEffect(() => {
        if(props.className !== '' || props.className !== undefined){
            setClasses(props.className)
        };
        setSrcs(props.src);
        setAlts(props.alt);
        // eslint-disable-next-line
    }, []);
    return (
        <img className={classes} src={srcs} alt={alts} />
    );
}

export default Image;