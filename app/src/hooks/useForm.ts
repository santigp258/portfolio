import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(
  initialState: T
): {
  values: T;
  handleInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
} => {
  const [values, setValues] = useState<T>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return { values, handleInputChange, reset };
};
