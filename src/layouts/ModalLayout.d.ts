import React from "react";
type Props = {
    isOpen: boolean;
    setIsModalOpen: () => void;
    children: React.ReactNode;
    zIndex?: number;
};
export declare const ModalLayout: React.FC<Props>;
export {};
