import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    // option 1: close the modal when the component unmounts
    // return () => modal.close();

    // option 2: close the modal when the component unmounts
    // return () => {
    // if (modal.open) {
    //   modal.close();
    // }
    // };

    // option 3: close the modal when the component unmounts
    return () => (modal.open ? modal.close() : undefined);
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
