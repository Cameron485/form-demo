import React from 'react';
import Form from './components/Form';
import { FormProvider } from './context/FormContext';
import { FormSchema } from './types/FormTypes';

const schema: FormSchema = {
  username: {
    label: 'Username',
    validation: (value) => value === '' ? 'Username is required' : null,
    asyncValidation: async (value) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return value === 'taken' ? 'Username already taken' : null;
    },
  },
  email: {
    label: 'Email',
    validation: (value) => value === '' ? 'Email is required' : null,
  },
};

const App: React.FC = () => {
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormProvider onSubmitHandler={handleSubmit}>
      <h1>Dynamic Form</h1>
      <Form schema={schema} onSubmitHandler={handleSubmit} />
    </FormProvider>
  );
};

export default App;
