import React, { useContext } from 'react';
import { UserContext } from './provider/UserProvider';

function UserInfo() {
  const { user } = useContext(UserContext);
  console.log(user);
  return <div>{user?.photoURL && user?.displayName && <img src={user.photoURL} alt={user.displayName} />}</div>;
}

export default UserInfo;
