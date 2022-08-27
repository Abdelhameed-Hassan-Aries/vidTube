import React, { useState, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createContext } from "react";

export const DEFAULT_TOAST_BAR_OPTIONS = {
  autoHideDuration: 4000,
  transitionDuration: 300,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
};

export const TOAST_MESSAGES = {
  emailEmpty: "Email cannot be empty",
  usernameEmpty: "Username cannot be empty",
  passwordEmpty: "Password cannot be empty",
  usernameDoesNotExist: "Username does not exist",
  passwordIncorrect: "Password is incorrect",
};

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const handleToastClose = () => {
    setIsToastOpen(false);
  };

  const handleToast = (message, severity) => {
    setIsToastOpen(true);
    setSeverity(severity);
    setMessage(message);
  };

  const toastValue = { handleToast };

  return (
    <ToastContext.Provider value={toastValue}>
      <Snackbar
        open={isToastOpen}
        onClose={handleToastClose}
        {...DEFAULT_TOAST_BAR_OPTIONS}
      >
        <MuiAlert onClose={handleToastClose} severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>

      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(
      `useToastContext must be used within a ToastContextProvider`
    );
  }

  return context;
};
