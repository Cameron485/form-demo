import React, { createContext, useState, FC, ReactNode, useCallback } from 'react';
import { FormData, FormContextProps } from '../types/FormTypes';

export const FormContext = createContext<FormContextProps | null>(null);

interface FormProviderProps {
  children: ReactNode;
  onSubmitHandler: (data: FormData) => void;
}

export const FormProvider: FC<FormProviderProps> = ({ children, onSubmitHandler }) => {
  const [formData, setFormData] = useState<FormData>({});

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitHandler(formData);
  }, [formData, onSubmitHandler]);

  return (
    <FormContext.Provider value={{ formData, setFormData, onSubmit }}>
      {children}
    </FormContext.Provider>
  );
};
