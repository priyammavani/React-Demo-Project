import React from 'react';

const From = (props) =>{
    const classes = 'from ' + props.className;
    const fromid = props.id;
    return (
        <from className={classes} id={fromid}>{props.children}</from>
      );
}

export default From;