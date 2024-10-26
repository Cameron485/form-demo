import { useState, useCallback } from 'react';

interface ValidationHookOptions {
  syncValidation?: (value: string) => string | null;
  asyncValidation?: (value: string) => Promise<string | null>;
}

export const useValidation = (initialValue: string, options: ValidationHookOptions) => {
  const { syncValidation, asyncValidation } = options;
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [asyncError, setAsyncError] = useState<string | null>(null);
  const [isAsyncValidating, setIsAsyncValidating] = useState(false);

  const handleChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Synchronous validation
    if (syncValidation) {
      const syncError = syncValidation(newValue);
      setError(syncError);
    }

    // Asynchronous validation
    if (asyncValidation) {
      setIsAsyncValidating(true);
      const asyncErrorResult = await asyncValidation(newValue);
      setAsyncError(asyncErrorResult);
      setIsAsyncValidating(false);
    }
  }, [syncValidation, asyncValidation]);

  return {
    value,
    error,
    asyncError,
    isAsyncValidating,
    handleChange,
  };
};
