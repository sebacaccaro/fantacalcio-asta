import React from 'react';
import ModalComp from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ModalProps {
  title: string;
  text: string;
  isShown: boolean;
  confirm: () => void;
  cancel: () => void;
}

function Modal(props: ModalProps) {
  return (
    <ModalComp
      show={props.isShown}
      onHide={() => {
        props.cancel();
      }}
    >
      <ModalComp.Header closeButton>
        <ModalComp.Title>{props.title}</ModalComp.Title>
      </ModalComp.Header>

      <ModalComp.Body>
        <p>{props.text}</p>
      </ModalComp.Body>

      <ModalComp.Footer>
        <Button
          onClick={() => {
            props.cancel();
          }}
          variant='secondary'
        >
          Annulla
        </Button>
        <Button
          onClick={() => {
            props.confirm();
          }}
          variant='primary'
        >
          Conferma
        </Button>
      </ModalComp.Footer>
    </ModalComp>
  );
}

export default Modal;
