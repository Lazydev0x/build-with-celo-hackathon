import React from "react";
import "./Modal.css";



function Modal({closeModal}) {

    return (
         <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>ajayiakade1@gmail.com</h1>
                </div>
                <div className="body">
                    <p>Select your Payment method</p>
                </div>
                <div className="footer">
                    <button>USDT Coin</button>
                    <button>Celo USD</button>
                </div>
            </div>
         </div>
    );
}

export default Modal;
