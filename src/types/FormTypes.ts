export interface FormData {
    [key: string]: string;
  }

  export interface FormContextProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  }

  // Define the schema with validation function types
  export interface FieldSchema {
    label: string;
    type?: string;
    validation?: (value: string) => string | null;
    asyncValidation?: (value: string) => Promise<string | null>;
  }

  export interface FormSchema {
    [key: string]: FieldSchema;
  }
