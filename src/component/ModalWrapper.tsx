import { Modal } from "@vanessapeixoto/my-modal";
import { createPortal } from "react-dom";
import './modalwrapper.css';

function ModalWrapper({ message, onClose, isOpen }: ModalWrapperProps) {
  if (!isOpen) return null;

  return createPortal (
    <div className="modal-overlay">
      <Modal message={message} onClose={onClose} isOpen={isOpen} />
    </div>,
    document.body
  );
}

interface ModalWrapperProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

export default ModalWrapper;