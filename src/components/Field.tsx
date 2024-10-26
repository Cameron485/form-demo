import React, { FC, useContext } from 'react';
import { useValidation } from '../hooks/useValidation';
import { FormContext } from '../context/FormContext';

interface FieldProps {
  name: string;
  label: string;
  syncValidation?: (value: string) => string | null;
  asyncValidation?: (value: string) => Promise<string | null>;
}

const Field: FC<FieldProps> = ({ name, label, syncValidation, asyncValidation }) => {
  const formContext = useContext(FormContext);
  if (!formContext) throw new Error('Field must be used within a FormProvider');

  const { formData, setFormData } = formContext;

  const { value, error, asyncError, isAsyncValidating, handleChange } = useValidation(formData[name] || '', {
    syncValidation,
    asyncValidation,
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);  // Trigger validation through useValidation hook
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleFieldChange}
      />
      {error && <span>{error}</span>}
      {isAsyncValidating && <span>Validating...</span>}
      {asyncError && <span>{asyncError}</span>}
    </div>
  );
};

export default Field;
