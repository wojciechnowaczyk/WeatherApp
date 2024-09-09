import {createContext, useContext, useState, ReactNode} from 'react';
import React from 'react';

export interface ErrorsContextProps {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
  isErrorBoxVisible: boolean;
  toggleErrorsBox: () => void;
}

const defaultValue: ErrorsContextProps = {
  errorMessage: '',
  setErrorMessage: () => {},
  isErrorBoxVisible: false,
  toggleErrorsBox: () => {},
};

const ErrorsContext = createContext(defaultValue);

interface ErrorsProviderProps {
  children: ReactNode;
}

export const ErrorsProvider = ({children}: ErrorsProviderProps) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isErrorBoxVisible, setIsErrorBoxVisible] = useState<boolean>(false);

  const toggleErrorsBox = () => {
    setIsErrorBoxVisible(prevState => !prevState);
  };

  return (
    <ErrorsContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        isErrorBoxVisible,
        toggleErrorsBox,
      }}>
      {children}
    </ErrorsContext.Provider>
  );
};

export const useErrors = () => {
  const context = useContext(ErrorsContext);
  if (!context) {
    throw new Error('useErrors must be used within an ErrorsProvider');
  }
  return context;
};
