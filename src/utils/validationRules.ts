export const required = (value: string): string | null => {
    return value.trim() === '' ? 'This field is required' : null;
  };

  export const minLength = (length: number) => (value: string): string | null => {
    return value.length < length ? `Minimum length is ${length}` : null;
  };

  export const emailFormat = (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? null : 'Invalid email format';
  };

  export const asyncUsernameAvailability = async (value: string): Promise<string | null> => {
    // Simulating an async check for username availability
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Fake delay
    return value === 'taken' ? 'Username is already taken' : null;
  };
