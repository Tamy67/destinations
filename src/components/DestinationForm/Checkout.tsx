import React, { useEffect, useState } from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';

const Checkout = () => {
  const [isValid, setValid] = useState<boolean>(false);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const validate = () => {
    let errors: HTMLInputElement[] = [];
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-control');
    inputs.forEach((input) => {
      !input.value ? errors.push(input) : errors.length && errors.pop();
    });
  };

  useEffect(() => {
    validate();
  });
  return (
    <form>
      {/* <h3>{destinations.length}</h3> */}
      <div className="divInput">
        <input
          className="form-control"
          name="destinationName"
          id="destinationName"
          type="text"
          placeholder="Nom de la destination"
          defaultValue=""
        />
      </div>

      <div className="divInput">
        <input className="form-control" name="address" id="address" type="text" placeholder="Adresse" defaultValue="" />
      </div>
      <div className="divInput">
        <input type="lien" id="image" name="image" placeholder="Lien de l’image" className="image" defaultValue="" />
      </div>

      <div className="divInputNum">
        <input
          type="text"
          id="population"
          name="population"
          placeholder="Nb Habitants"
          className="form-control"
          defaultValue=""
        />

        <input
          type="text"
          name="hotels"
          id="hotels"
          placeholder="Nb. Hôtels"
          className="form-control"
          defaultValue=""
        />
        <input
          type="text"
          name="revenue"
          id="revenue"
          placeholder="Revenu Moy"
          className="form-control"
          defaultValue=""
        />

        <input
          type="text"
          name="surface"
          id="surface"
          placeholder="Superficie"
          className="form-control"
          defaultValue=""
        />
      </div>

      <div className="toggleContainer">
        {' '}
        <ToggleButton onToggle={onToggle} isToggled={isToggled} />
        <label htmlFor="active" className="form-control">
          Activer
        </label>
      </div>

      <div className="btnContainer">
        <button className="btnCancel" type="button" onClick={(e) => console.log('hello', e)}>
          CANCEL
        </button>
        <button className="btnSubmit" type="submit">
          CONFIRM
        </button>
      </div>
    </form>
  );
};

export default Checkout;
