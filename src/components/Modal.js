import React from 'react';

const Modal = (props) =>{
    const classes = 'modal-wrapper ' + props.className;
    const Id = props.id;
    const BtnId = "#"+Id;
    const Btntitle = props.DataButtonName;
    return (
        <div className={classes}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={BtnId}>
            {Btntitle}
            </button>
            <div className="modal fade" id={Id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                </div>
            </div>
            </div>
        </div>
      );
}

export default Modal;