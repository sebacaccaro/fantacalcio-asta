import User from './User';

export default interface Auction {
  code: number;
  name: string;
  creator_id: string;
  all_ids: string[];
  participants: User[];
  status: 'created' | 'started' | 'ended';
  rules: any /*TODO: deifne rules*/;
}
