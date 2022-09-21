import classes from "./Modal.module.css";
import  ReactDOM  from "react-dom";
import { Fragment } from "react";

const BackDrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onCloseCart}></div>
    )
};

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>{props.children}</div>
    )
};

const container = document.getElementById('overlay');

const Modal = (props) => {

    return(
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onCloseCart={props.onCloseCart}/>,container)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,container)}
        </Fragment>
    )

};

export default Modal;
