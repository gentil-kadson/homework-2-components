import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  title: string;
  children: ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ title, children }, ref) => {
    const modal = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          modal.current?.showModal();
        },
        close() {
          modal.current?.close();
        },
      };
    });

    return (
      <dialog
        className="m-auto open:flex flex-col items-center shadow-md p-8 gap-8 rounded-md"
        ref={modal}
      >
        <h1 className="text-xl font-bold">{title}</h1>
        {children}
      </dialog>
    );
  }
);

export default Modal;
