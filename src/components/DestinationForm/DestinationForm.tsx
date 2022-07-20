import React, { Dispatch, useContext, useReducer, useState } from 'react';
import { DestinationType } from '../../common_types/Destination';
import { initialState } from '../../contexts/DestinationContext/DestinationContextProvider';

import {
  DestinationActionType,
  destinationReducer,
  UPDATE_DESTINATION,
} from '../../contexts/DestinationContext/DestinationReducer';
import { useDestinations } from '../../hooks/useDestinations';

import useInput from '../../hooks/useInput';
import ToggleButton from '../ToggleButton/ToggleButton';
import './style.css';

export type InitialValueInputType = {
  onChange: () => void;
  onBlur: () => void;
  value: string;
};

export type ValidationsType = {
  isEmpty: boolean;
  minLength: number;
  maxLength: number;
};

const DestinationForm = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const { destinations } = useDestinations();

  const destinationName = useInput('', { isEmpty: true, minLength: 2, maxLength: 100 });
  const image = useInput('', { isEmpty: true, minLength: 2, maxLength: 100 });
  const address = useInput('', { isEmpty: true, minLength: 3, maxLength: 100 });
  const hotels = useInput('', { isEmpty: true, minLength: 3, maxLength: 100 });
  const population = useInput('', { isEmpty: true, minLength: 1, maxLength: 100 });
  const revenue = useInput('', { isEmpty: true, minLength: 3, maxLength: 100 });
  const surface = useInput('', { isEmpty: true, minLength: 3, maxLength: 100 });

  const [values, setValues] = useState<DestinationType>({
    id: '',
    destinationName: '',
    image: { src: '', alt: '' },
    address: '',
    hotels: 0,
    population: 0,
    revenue: 0,
    surface: 0,
    active: false,
  });

  const [destinationState, dispatch] = useReducer(destinationReducer, initialState);

  const destinationsDispatcher = (dispatch: Dispatch<DestinationActionType>) => {
    return {
      addDestination: (destination: DestinationType) => dispatch({ type: UPDATE_DESTINATION, payload: destination }),
    };
  };

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    setValues(Object.fromEntries(data.entries()) as any);

    // console.log(values);
  };

  console.log({ values });

  const inputNm =
    !destinationName.inputValid ||
    !address.inputValid ||
    !image.inputValid ||
    !population.inputValid ||
    !hotels.inputValid ||
    !revenue.inputValid ||
    !surface;

  return (
    <form onSubmit={onSubmit}>
      <h3></h3>
      <div className="divInput">
        {destinationName.isDirty && destinationName.isEmpty && (
          <p style={{ color: 'red', fontSize: 10.5 }}>Nom de la destination est obligatoire</p>
        )}
        {destinationName.isDirty && destinationName.minLength && (
          <div
            style={{
              color: 'red',
              fontSize: 10.5,
            }}>
            La longueur minimale du nom doit être supérieure de deux lettres
          </div>
        )}

        <input
          className="destinationName"
          name="destinationName"
          id="destinationName"
          type="text"
          placeholder="Nom de la destination"
          value={destinationName.value}
          onChange={(e) => destinationName.onChange(e)}
          onBlur={(e) => destinationName.onBlur(e)}
        />
      </div>

      <div className="divInput">
        {address.isDirty && address.isEmpty && (
          <p style={{ color: 'red', fontSize: 10.5 }}>Adresse de la destination est obligatoire</p>
        )}
        {address.isDirty && address.minLength && (
          <div style={{ color: 'red', fontSize: 10.5 }}>
            La longueur minimale du nom doit être supérieure de deux lettres
          </div>
        )}
        <input
          className="address"
          name="address"
          id="address"
          type="text"
          placeholder="Adresse"
          value={address.value}
          onChange={(e) => address.onChange(e)}
          onBlur={(e) => address.onBlur(e)}
        />
      </div>
      <div className="divInput">
        {image.isDirty && image.isEmpty && (
          <p style={{ color: 'red', fontSize: 10.5 }}>Image de la destination est obligatoire</p>
        )}{' '}
        <input
          type="lien"
          id="image"
          name="image"
          placeholder="Lien de l’image"
          className="image"
          value={image.value}
          onChange={(e) => image.onChange(e)}
          onBlur={(e) => image.onBlur(e)}
        />
      </div>

      <div className="divInput">
        {' '}
        {population.isDirty && population.isEmpty && (
          <p style={{ color: 'red', fontSize: 10.5 }}>Nombre d'habitants de la destination est obligatoire</p>
        )}
        {population.isDirty && population.minLength && (
          <p style={{ color: 'red', fontSize: 10.5 }}>
            Le nomber minimale d'habitants doit être supérieure de deux lettres
          </p>
        )}
      </div>

      <div className="divInputNum">
        <input
          type="text"
          id="population"
          name="population"
          placeholder="Nb Habitants"
          className="population"
          value={population.value}
          onChange={(e) => population.onChange(e)}
          onBlur={(e) => population.onBlur(e)}
        />

        <input
          type="text"
          name="hotels"
          id="hotels"
          placeholder="Nb. Hôtels"
          className="hotels"
          value={hotels.value}
          onChange={(e) => hotels.onChange(e)}
          onBlur={(e) => hotels.onBlur(e)}
        />
        <input
          type="text"
          name="revenue"
          id="revenue"
          placeholder="Revenu Moy"
          className="revenue"
          value={revenue.value}
          onChange={(e) => revenue.onChange(e)}
          onBlur={(e) => revenue.onBlur(e)}
        />

        <input
          type="text"
          name="surface"
          id="surface"
          placeholder="Superficie"
          className="surface"
          value={surface.value}
          onChange={(e) => surface.onChange(e)}
          onBlur={(e) => surface.onBlur(e)}
        />
      </div>

      <div className="toggleContainer">
        {' '}
        <ToggleButton onToggle={onToggle} isToggled={isToggled} />
        <label htmlFor="active" className="active">
          Activer
        </label>
      </div>

      <div className="btnContainer">
        <button className="btnCancel" type="button" onClick={(e) => console.log('hello', e)}>
          CANCEL
        </button>
        <button
          className="btnSubmit"
          disabled={inputNm}
          type="submit"
          onClick={() => dispatch({ type: 'UPDATE_DESTINATION', payload: values })}>
          CONFIRM
        </button>
      </div>
    </form>
  );
};

export default DestinationForm;
