import React from 'react';
import Form from '../DestinationForm/Form';

import Modal from './Modal';

export type BaseModalWrapperType = {
  isModalVisible: boolean;
  onBackdropClick: () => void;
};

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
          <Form />
        </div>
      </div>
    </Modal>
  );
};

export default BaseModalWrapper;
