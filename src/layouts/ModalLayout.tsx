import React from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  setIsModalOpen: () => void;
  children: React.ReactNode;
  zIndex?: number; // default 60
};

export const ModalLayout: React.FC<Props> = ({
  isOpen,
  setIsModalOpen,
  children,
  zIndex = 60,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex }}
      onClick={setIsModalOpen}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
