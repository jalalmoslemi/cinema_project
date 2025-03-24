import { User } from './user';

export interface SharedData {
  [key: string]: unknown;
  auth: User;
}
