import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { DestinationType } from '../../common_types/Destination';
import { DestinationProvider } from '../../contexts/DestinationContext/DestinationContextProvider';
import { useDestinations } from '../../hooks/useDestinations';
import ToggleButton from '../ToggleButton/ToggleButton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './style.css';

export type CardDestinationType = {
  destination: DestinationType;
};

const CardDestination = ({ destination }: CardDestinationType) => {
  const { id, destinationName, address, population, hotels, revenue, surface, image, active } = destination;
  const [isToggled, setIsToggled] = useState<boolean>(active);

  const imageRef = useRef<HTMLImageElement>(null);

  // const { toggleDestination } = useDestinations();

  const numberWithSpace = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

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
    <DestinationProvider>
      <div key={id} className="card">
        <div className="card__image-container">
          <LazyLoadImage
            src={image.src}
            alt={image.alt}
            effect="blur"
            placeholder={<img src={image.src} alt={image.alt} />}
          />
          {/* <img src={image.src} alt={image.alt} ref={imageRef} /> */}
        </div>
        <div className="card__content">
          <h2 className="card__title">{destinationName}</h2>
          <span className="toggle">
            <ToggleButton onToggle={handleClick} isToggled={isToggled} />
          </span>
          <div className="card__info">
            {' '}
            <p className="card__text">{address}</p>
          </div>
        </div>

        <div className="card__footer">
          <div className="block">
            {' '}
            <span>{numFormatter(population)}</span>
            <p>Habitants</p>
          </div>
          <div className="block">
            <span>{numberWithSpace(hotels)}</span>
            <p>Hôtels</p>
          </div>
          <div className="block">
            {' '}
            <span>{numberWithSpace(revenue)} €</span>
            <p>Revenu Moy</p>
          </div>
          <div className="block">
            {' '}
            <span>{surface}</span>
            <p>km²</p>
          </div>
        </div>
      </div>
    </DestinationProvider>
  );
};

export default CardDestination;
