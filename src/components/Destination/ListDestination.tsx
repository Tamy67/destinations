import React, { useContext, useState } from 'react';
import { useDestinations } from '../../hooks/useDestinations';
import CardDestination from './CardDestination';
import BaseModalWrapper from '../ModalPopup/BaseModalWrapper';
import './style.css';
import { DestinationType } from '../../common_types/Destination';

const ListDestination = () => {
  const { destinations } = useDestinations();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  return (
    <>
      {destinations && destinations.length === 0 && <div>Aucune destination</div>}
      <div className="container">
        <h2 className="title">Destinations</h2>
        <button className="btnModal" onClick={toggleModal}>
          + AJOUTER
        </button>
        <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
      </div>
      {destinations && destinations.length > 0 && (
        <section className="cards">
          {destinations.map((destination: DestinationType) => (
            <CardDestination key={destination.id} destination={destination} />
          ))}
        </section>
      )}
    </>
  );
};

export default ListDestination;
