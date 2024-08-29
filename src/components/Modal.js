import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                </div>
                <div className="flex justify-end">
                    {actionBar}
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );

}

export default Modal;

// Component that displays a modal window in which the user click on a button and opens the modal window displaying a center panel with some information for the user, putting also a dark background for the rest of the content for the user 

// steps
// 1) Make a modal component
// 2) Make a 'ModalPage' component
// 3) Add route to App.js to show ModalPage when a user goes to '/modal'
// 4) Add a link to the Sidebar component