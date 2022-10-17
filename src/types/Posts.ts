import { User } from './Users';
import { Comments } from './Comments';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | null;
  comments: Comments[];
}
