import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
type ModalPropsType = {
  onBackdropClick: () => void;
  children?: React.ReactNode;
};
const Modal = ({ onBackdropClick, children }: ModalPropsType) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    const closeTimeout = setTimeout(() => {
      onBackdropClick();
      clearTimeout(closeTimeout);
    }, 300);
  };

  const backdropClasses = closing ? 'backdrop-hide' : 'backdrop';

  return ReactDOM.createPortal(
    <div className={backdropClasses} onClick={handleClose}>
      {children}
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modal-root')!,
  );
};

export default Modal;
