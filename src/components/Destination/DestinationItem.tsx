import React, { useEffect, useState } from 'react';
import { DestinationType } from '../../common_types/Destination';
import { useDestination } from '../../contexts/DestinationProfileContext';
import ToggleButton from '../ToggleButton/ToggleButton';
import './style.css';

export type CardDestinationType = {
  destination: DestinationType;
  toggleDestination?: (id: string) => void;
};

const DestinationItem = ({ destination }: CardDestinationType) => {
  const { id, destinationName, address, population, hotels, revenue, surface, image, active } = destination;
  // const { toggleDestination } = useDestination();
  const [isToggled, setIsToggled] = useState<boolean>(active);

  const numberWithSpace = (num: number) => {
    return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 })
    .format(revenue)
    .split('.')
    .join(' ');

  const numFormatter = (num: number) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + ' K '; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + ' M '; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };

  useEffect(() => {
    if (active === true) {
      setIsToggled(true);
    } else {
      setIsToggled(false);
    }
  }, [active]);

  const handleClick = () => {
    setIsToggled(!isToggled);
    // console.log('handle', { destination });
  };

  return (
    <>
      <div key={id} className="destination">
        <div className="destination__image-container">
          <img src={image} alt="image" />
        </div>
        <div className="destination__content">
          <h2 className="destination__title">{destinationName}</h2>
          <span className="toggle">
            <ToggleButton onToggle={handleClick} isToggled={isToggled} />
          </span>
          <div className="destination__info">
            {' '}
            <p className="destination__text">{address}</p>
          </div>
        </div>

        <div className="destination__footer">
          <div className="block">
            {' '}
            <span>{numFormatter(population !== undefined ? population : 0)}</span>
            <p>Habitants</p>
          </div>
          <div className="block">
            <span>{numberWithSpace(hotels !== undefined ? hotels : 0)}</span>
            <p>Hôtels</p>
          </div>
          <div className="block">
            {' '}
            {revenue && <span>{currency}</span>}
            <p>Revenu Moy</p>
          </div>
          <div className="block">
            {' '}
            <span>{surface !== undefined ? surface : 0}</span>
            <p>km²</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationItem;
