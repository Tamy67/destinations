import React, { useState } from 'react';

import { useDestination } from '../../contexts/DestinationProfileContext';
import BaseModalWrapper from '../ModalPopup/BaseModalWrapper';
import DestinationItem from './DestinationItem';

import './style.css';

const ListDestination = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const { destinations } = useDestination();

  return (
    <>
      <div className="container">
        <h2 className="title">Destinations</h2>
        <button className="btnModal" onClick={toggleModal}>
          + AJOUTER
        </button>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      </div>

      {destinations && destinations.length > 0 ? (
        <section className="destinations">
          {destinations.map((destination) => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </section>
      ) : (
        <span>Aucune destination</span>
      )}
    </>
  );
};

export default ListDestination;
