import { useState } from "react";
import "./Modal.scss";

function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const handleShowModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <button onClick={(handleShowModal)}>Open Modal</button>
            {isOpen && (<div className="modal">
                <div className="modal-body">
                    <button className="modal-close" onClick={(handleCloseModal)}>X</button>
                    <div className="modal-content">
                        <p>This is the content of the modal.</p>
                    </div>
                </div>
            </div>)}


        </>
    )
}

export default Modal;