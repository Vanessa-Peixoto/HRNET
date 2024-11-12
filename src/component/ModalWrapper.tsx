import { Modal } from "@vanessapeixoto/my-modal";
import { createPortal } from "react-dom";
import './modalwrapper.css';

function ModalWrapper({ message, onClose, isOpen }: ModalWrapperProps) {
  if (!isOpen) return null;

  return(
    
      <Modal message={message} onClose={onClose} isOpen={isOpen} />

  
  );
}

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export default ModalWrapper;