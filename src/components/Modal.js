import React from 'react';
import { Document } from 'react-pdf';
import resume from '../assets/ISF_resume.pdf';

const Modal = props => {

    return (
        <div className={props.handleClassName} show={props.show}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <Document file={{ data: resume }} />
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={props.onClick}>
            </button>
        </div>
    )
}

export default Modal
