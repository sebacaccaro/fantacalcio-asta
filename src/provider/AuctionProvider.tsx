import React, { useState, useEffect, createContext, useContext } from 'react';
import firebase, { firestore } from '../firebase';
import Auction from '../types/Auctions';
import { UserContext } from './UserProvider';
interface MyProps {
  children?: React.ReactNode;
}

export const AuctionContex = createContext({ auctions: [] } as { auctions: Auction[] });
const AuctionProvider: React.FunctionComponent<MyProps> = props => {
  const { user } = useContext(UserContext);
  const [auctions, setAuctions] = useState<Auction[]>([]);
  let unSub: (() => void) | null = null;

  useEffect(() => {
    if (!user) {
      if (unSub) {
        unSub;
      }
      setAuctions([]);
    } else {
      unSub = firebase
        .firestore()
        .collection('auctions')
        .where('all_ids', 'array-contains', user.uid)
        .onSnapshot(snapshot => {
          const docs = snapshot.docs;
          const auctions: Auction[] = docs.map(doc => ({
            code: doc.data().code,
            name: doc.data().name,
            creator_id: doc.data().creator_id,
            all_ids: doc.data().all_ids,
            participants: doc.data().participants,
            status: doc.data().status,
            rules: doc.data().rules,
          }));
          setAuctions(auctions);
        });
    }
  }, [user]);

  // eslint-disable-next-line react/prop-types
  return <AuctionContex.Provider value={{ auctions }}>{props.children}</AuctionContex.Provider>;
};

AuctionProvider.displayName = 'AuctionProvider';
export default AuctionProvider;
