import { FC } from 'react';
import Field from './Field';
import { FormSchema } from '../types/FormTypes';
import { useFormContext } from '../hooks/useFormContext';

interface FormProps {
  schema: FormSchema;
  onSubmitHandler: (data: { [key: string]: string }) => void;
}

const Form: FC<FormProps> = ({ schema, onSubmitHandler }) => {
  const { onSubmit } = useFormContext();

  return (
    <form onSubmit={onSubmit}>
      {Object.keys(schema).map((key) => (
        <Field
          key={key}
          name={key}
          label={schema[key].label}
          syncValidation={schema[key].validation}
          asyncValidation={schema[key].asyncValidation}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
