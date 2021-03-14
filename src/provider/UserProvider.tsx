import React, { useState, useEffect, createContext } from 'react';
import firebase, { auth } from '../firebase';
import User from '../types/User';

interface MyProps {
  children?: React.ReactNode;
}

const updateUserInfo: (user: User) => Promise<void> = async (user: User) => {
  const results = await firebase.firestore().collection('users').where('id', '==', user.userId).get();
  if (results.docs.length === 0) {
    firebase.firestore().collection('users').doc(user.userId).set(user);
  }
};

export const UserContext = createContext({ user: null, pending: false } as { user: firebase.User | null; pending: boolean });
const UserProvider: React.FunctionComponent<MyProps> = props => {
  const [user, setuser] = useState<firebase.User | null>(null);
  const [pending, setpending] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user: firebase.User | null) => {
      setuser(user);
      setpending(false);
      if (user) {
        updateUserInfo({ userId: user.uid, displayName: user.displayName, email: user.email, photoUrl: user.photoURL });
      }
    });
  }, []);

  // eslint-disable-next-line react/prop-types
  return <UserContext.Provider value={{ user, pending }}>{props.children}</UserContext.Provider>;
};

UserProvider.displayName = 'UserProvider';
export default UserProvider;
