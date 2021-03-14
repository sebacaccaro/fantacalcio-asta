import firebase from 'firebase';
import Auction from '../types/Auctions';
import User from '../types/User';
import { getRandomInt } from '../Utils/MathUtils';

const createAutction = async (creator: User, name: string) => {
  let code = -1;
  while (code === -1) {
    code = getRandomInt(0, 99999);
    const matchingCodes = await firebase.firestore().collection('auctions').where('code', '==', code).get();
    if (matchingCodes.docs.length != 0) {
      code = -1;
    }
  }
  const auction: Auction = {
    code,
    creator_id: creator.userId,
    all_ids: [creator.userId],
    name,
    participants: [],
    status: 'created',
    rules: null,
  };
  firebase.firestore().collection('auctions').add(auction);
};

export { createAutction };
