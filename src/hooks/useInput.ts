import React, { useState } from 'react';
import { ValidationsType } from '../common_types/Destination';
import useValidation from './useValidation';

const useInput = (initialValue: string, validations: ValidationsType) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false); // vishli li mi iz sostoyaniya ili net
  const [error, setError] = useState<string>(''); //message

  const valid = useValidation(value, validations);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  const onError = (message: string) => {
    setError(message);
  };
  return {
    value,
    isDirty,
    error,
    onBlur,
    onChange,
    onError,
    ...valid,
  };
};

export default useInput;
