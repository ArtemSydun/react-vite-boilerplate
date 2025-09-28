import { ModalVariant } from "@/types";
import { PayloadAction } from "@reduxjs/toolkit";
export interface GenericModalConfig {
    isOpen: boolean;
    variant: ModalVariant;
    header: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    customIcon?: string;
}
export interface IModalState {
    genericModalConfig: GenericModalConfig;
}
export declare const modalSlice: import("@reduxjs/toolkit").Slice<IModalState, {
    showGenericModal(state: import("immer").WritableDraft<IModalState>, action: PayloadAction<Omit<GenericModalConfig, "isOpen">>): void;
    hideGenericModal(state: import("immer").WritableDraft<IModalState>): void;
    updateGenericModal(state: import("immer").WritableDraft<IModalState>, action: PayloadAction<Partial<GenericModalConfig>>): void;
}, "modalSlice", "modalSlice", import("@reduxjs/toolkit").SliceSelectors<IModalState>>;
export declare const showGenericModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<GenericModalConfig, "isOpen">, "modalSlice/showGenericModal">, hideGenericModal: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"modalSlice/hideGenericModal">, updateGenericModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<Partial<GenericModalConfig>, "modalSlice/updateGenericModal">;
export declare const modalReducer: import("redux").Reducer<IModalState>;
