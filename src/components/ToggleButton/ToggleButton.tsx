import React from 'react';
import './style.css';

type ToggleButtonType = {
  onToggle: () => void;
  isToggled: boolean;
  clNm?: string;
};
const ToggleButton = ({ isToggled, onToggle, clNm }: ToggleButtonType) => {
  return (
    <label className={(clNm = 'switch')}>
      <input type="checkbox" name="toggle" id="toggle" checked={isToggled} onChange={onToggle} />
      <span className="slider" />
    </label>
  );
};

export default ToggleButton;
