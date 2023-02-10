import { Action } from '@ngrx/store';
import { User } from '../components/users-list/models/user.model';

export const ADD_USER = 'Add User';

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export type Actions = AddUser;
