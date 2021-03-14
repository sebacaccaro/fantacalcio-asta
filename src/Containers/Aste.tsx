import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from '../Components/Modal';
import { useContext } from 'react';
import { AuctionContex } from '../provider/AuctionProvider';
import AuctionCard from '../Components/AuctionCard';
import { createAutction } from '../Service/Auction';
import { UserContext } from '../provider/UserProvider';
import User from '../types/User';

function Aste() {
  const { auctions } = useContext(AuctionContex);
  const { user } = useContext(UserContext);
  const [showCreateConfirm, setShowCreateConfirm] = useState(false);
  const [createText, setCreateText] = useState('');
  if (!user) {
    return null;
  }
  const userMapped: User = {
    userId: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoUrl: user.photoURL,
  };

  return (
    <div className='container'>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>{"Crea un'asta"}</Card.Title>
          <Card.Text>{"Se sei l'admin della tua lega, crea un'asta per i tuoi fantallenatori"}</Card.Text>
          <Form.Group>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Nome Asta'
              onChange={event => {
                setCreateText(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant='primary' onClick={() => setShowCreateConfirm(true)} disabled={createText.length < 5}>
            Crea Asta
          </Button>
          <Modal
            isShown={showCreateConfirm}
            title='Conferma'
            text={`Vuoi creare un'asta dal nome ${createText}?`}
            confirm={() => {
              setShowCreateConfirm(false);
              createAutction(userMapped, createText);
            }}
            cancel={() => {
              setShowCreateConfirm(false);
            }}
          ></Modal>
        </Card.Body>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>{"Unisciti ad un'asta"}</Card.Title>
          <Card.Text>{"Se hai il codice di un'asta, inseriscilo qui  unirti"}</Card.Text>
          <Form.Group>
            <Form.Control size='lg' type='text' placeholder='Codice Asta' />
          </Form.Group>
          <Button variant='primary'>Unisciti</Button>
        </Card.Body>
      </Card>
      <Card className='m-2'>
        <Card.Body>
          <Card.Title>{'Le tue aste'}</Card.Title>
          {auctions.length > 0 ? (
            <div className='row'>
              {auctions.map(a => (
                <AuctionCard title={a.name} key={a.name}></AuctionCard>
              ))}
            </div>
          ) : (
            'Non sei iscritto a nessuna asta'
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Aste;
