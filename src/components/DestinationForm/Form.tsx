import React, { useState } from 'react';
import { DestinationType } from '../../common_types/Destination';
import { useDestination } from '../../contexts/DestinationProfileContext';
import ToggleButton from '../ToggleButton/ToggleButton';

import './style.css';

const Form = () => {
  const { toUpload } = useDestination();

  const [destinationValues, setDestinationValues] = useState<DestinationType>({} as DestinationType);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(isModalVisible);
  };

  const [isToggled, setIsToggled] = useState<boolean | undefined>(destinationValues.active);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDestinationValues({ ...destinationValues, [name]: value });
  };

  const onToggle = () => {
    setIsToggled(!isToggled);
    setDestinationValues({ ...destinationValues, active: isToggled ? false : true });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toUpload({ ...destinationValues });
    setDestinationValues({} as DestinationType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="divInput">
        <input
          type="text"
          id="destinationName"
          name="destinationName"
          className="destinationName"
          placeholder="Nom de la destination"
          value={destinationValues.destinationName || ''}
          onChange={onChange}
          required
        />
        <input
          type="text"
          id="address"
          name="address"
          className="address"
          placeholder="Adresse"
          value={destinationValues.address || ''}
          onChange={onChange}
          required
          // pattern={'^[A-Za-z0-9]{3,16}$'}
        />
        <input
          type="text"
          id="image"
          name="image"
          className="image"
          placeholder="Lien de l’image"
          value={destinationValues.image || ''}
          onChange={onChange}
          required
        />
      </div>

      <div className="divInputNum">
        <input
          type="text"
          id="population"
          name="population"
          className="population"
          placeholder="Nb Habitants"
          value={destinationValues.population || ''}
          onChange={onChange}
          required
          // onBlur={(e) => population.onBlur(e)}
        />

        <input
          type="text"
          id="hotels"
          name="hotels"
          className="hotels"
          placeholder="Nb. Hôtels"
          value={destinationValues.hotels || ''}
          onChange={onChange}
          required
          // onBlur={(e) => hotels.onBlur(e)}
        />
        <input
          type="text"
          id="revenue"
          name="revenue"
          className="revenue"
          placeholder="Revenu Moy"
          value={destinationValues.revenue || ''}
          onChange={onChange}
          required
          // onBlur={(e) => revenue.onBlur(e)}
        />

        <input
          type="text"
          id="surface"
          name="surface"
          className="surface"
          placeholder="Superficie"
          value={destinationValues.surface || ''}
          onChange={onChange}
          required
          // onBlur={(e) => surface.onBlur(e)}
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
        <button className="btnCancel" type="button" onClick={(e) => setIsModalVisible(isModalVisible)}>
          CANCEL
        </button>
        <button className="btnSubmit" disabled={destinationValues === undefined ? true : false}>
          CONFIRM
        </button>
      </div>
    </form>
  );
};

export default Form;
