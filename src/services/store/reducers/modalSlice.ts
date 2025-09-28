import {  ModalVariant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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

const initialState: IModalState = {
  genericModalConfig: {
    isOpen: false,
    variant: "warning",
    header: "",
  },
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    showGenericModal(
      state,
      action: PayloadAction<Omit<GenericModalConfig, "isOpen">>
    ) {
      state.genericModalConfig = { ...action.payload, isOpen: true };
    },
    hideGenericModal(state) {
      state.genericModalConfig.isOpen = false;
    },
    updateGenericModal(
      state,
      action: PayloadAction<Partial<GenericModalConfig>>
    ) {
      state.genericModalConfig = {
        ...state.genericModalConfig,
        ...action.payload,
      };
    },
  },
});

export const {
  showGenericModal,
  hideGenericModal,
  updateGenericModal,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
