import React, { useEffect, useState } from 'react';
import { ValidationsType } from '../common_types/Destination';


const useValidation = (value: string, validations: ValidationsType) => {
  // value : tekychee sostoyanie
  // validation: obekt v kotorom xranitsya informacuya o vsex vidax validacii
  const [isEmpty, setEmpty] = useState(true);
  const [minLength, setMinLenght] = useState(false);
  const [maxLength, setMaxLength] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLenght(true) : setMinLenght(false);
          break;

        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;

        case 'maxLength':
          value.length > validations[validation] ? setMaxLength(true) : setMaxLength(false);
          break;

        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLength || minLength) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLength, minLength]);

  return {
    isEmpty,
    minLength,
    maxLength,
    inputValid,
  };
};

export default useValidation;
