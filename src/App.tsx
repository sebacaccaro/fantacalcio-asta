import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase, { signOut } from './firebase';

import UserProvider, { UserContext } from './provider/UserProvider';
import UserInfo from './UserInfo';
import Button from 'react-bootstrap/Button';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';
import Outer from './Containers/Outer';
import AuctionProvider from './provider/AuctionProvider';

interface IProva {
  title: string;
  body: string;
}

function App(): JSX.Element {
  /* firebase.firestore().collection('league').add({
    title: 'Working2',
    body: 'This is to check the Integration is working',
  }); */

  const [prova, setProva] = useState<IProva[]>();

  useEffect(() => {
    firebase
      .firestore()
      .collection('league')
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          body: doc.data().body,
          title: doc.data().title,
        }));
        setProva(lists);
      });
  }, []);

  return (
    <UserProvider>
      <AuctionProvider>
        <Outer></Outer>

        <div>
          {/*         <Button
          onClick={() => {
            signInWithGoogle();
          }}
          >
          SINGIN
          </Button>
          <Button
          onClick={() => {
            signOut();
          }}
          >
          SINGOUT
          </Button>
          {prova?.map(item => (
            <div key='l'>
            <div>{item.title}</div>
            <div>{item.body}</div>
            </div>
            ))}
          <UserInfo></UserInfo> */}
        </div>
      </AuctionProvider>
    </UserProvider>
  );
}

export default App;
