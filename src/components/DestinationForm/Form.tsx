import React, { useContext, useState } from 'react';
import { DestinationType } from '../../common_types/Destination';
import { DestinationContext } from '../../contexts/DestinationContext/DestinationContextProvider';
import { useDestinations } from '../../hooks/useDestinations';
import FormInput from './FormInput';
import './style.css';

export type ValuesType = {
  username: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
};
const Form = () => {
  const { destinations, addDest } = useDestinations();
  const [values, setValues] = useState<any>({
    destinationName: '',
    address: '',
    image: { src: '', alt: '' },
    population: 0,
    hotels: 0,
    revenue: 0,
    surface: 0,
    active: false,
  });

  const inputs = [
    {
      id: 'destinationName',
      name: 'destinationName',
      type: 'text',
      placeholder: 'Nom de la destination',
      errorMessage:
        'Nom de la destination doit comporter entre 3 et 16 caractères et ne doit pas inclure de caractères spéciaux',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 'address',
      name: 'address',
      type: 'text',
      placeholder: 'Adresse',
      errorMessage:
        'Adresse de la destination doit comporter entre 3 et 100 caractères et ne doit pas inclure de caractères spéciaux',
      required: true,
    },
    {
      id: 'image',
      name: 'image',
      type: 'lien',
      placeholder: 'Lien de l’image',
      errorMessage: 'Image de la destination doit comporter entre un lien',
      required: true,
    },
    {
      id: 'population',
      name: 'population',
      type: 'text',
      placeholder: 'Nb Habitants',
      errorMessage: 'Nb Habitants',
      label: 'Password',
      pattern: `/^[0-9]{4,6}$`,
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget)

    addDest(values);
    // setValues({});
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
