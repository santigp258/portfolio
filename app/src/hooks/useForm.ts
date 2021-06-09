import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(
  initialState: T
): {
  values: T;
  handleInputChange: ({
    target
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  reset: () => void;
} => {
  const [values, setValues] = useState<T>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({
    target
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return { values, handleInputChange, reset };
};
