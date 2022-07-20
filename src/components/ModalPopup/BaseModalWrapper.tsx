import React from 'react';
import { BaseModalWrapperType } from '../../common_types/Destination';
import Checkout from '../DestinationForm/Checkout';
import DestinationForm from '../DestinationForm/DestinationForm';
import Modal from './Modal';

const BaseModalWrapper = ({ isModalVisible, onBackdropClick }: BaseModalWrapperType) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3> Ajouter une nouvelle destination</h3>
        </div>
        <div className="modal-body">
          {/* <DestinationForm /> */}
          <Checkout />
        </div>
      </div>
    </Modal>
  );
};

export default BaseModalWrapper;
