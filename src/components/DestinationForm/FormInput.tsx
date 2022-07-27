import { useState } from 'react';
import './style.css';

export type InputsType = {
  id?: string;
  className?: string;
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  pattern?: string;
  required?: boolean;
  focuced?: any;
};

const FormInput = (props: InputsType) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        // onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        // focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
