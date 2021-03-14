import { assert } from 'node:console';
import React, { useContext } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { UserContext } from '../provider/UserProvider';

function Home() {
  const { user } = useContext(UserContext);
  if (!user) return <div></div>;
  const { displayName, photoURL } = user;
  return (
    <div className='container'>
      {' '}
      <Jumbotron>
        <h1>Ciao {displayName}!</h1>
        <p>{"Leggi le istruzioni o buttati subito in un'asta"}</p>
        <p>{'Puoi usare la barra di navigazione o le scorciatoie qui sotto'}</p>
      </Jumbotron>
    </div>
  );
}

export default Home;
