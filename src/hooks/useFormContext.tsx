import { useContext } from 'react';
import { FormContext } from '../context/FormContext';
import { FormContextProps } from '../types/FormTypes';

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
