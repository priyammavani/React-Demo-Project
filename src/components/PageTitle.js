import React from 'react';

const PageTitle = (props) =>{
    const classes = props.className;
    const TitleContent = props.titleContent;
    return (
        <h1 className={classes}>{TitleContent}</h1>
    );
}

export default PageTitle;