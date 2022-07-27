import React from 'react';
import './style.css';

type ToggleButtonType = {
  onToggle: () => void;
  isToggled?: boolean;
};
const ToggleButton = ({ isToggled, onToggle }: ToggleButtonType) => {
  return (
    <label className="switch">
      <input type="checkbox" name="active" id="active" defaultChecked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default ToggleButton;
