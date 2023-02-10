import { createAction } from '@ngrx/store';
import { User } from '../../components/users-list/models/user.model';

export const getUsers = createAction('[User] Get Users');
export const addUser = createAction('[User] Add User', (user: User) => user);
export const updateQuery = createAction(
  '[Query] Update query',
  (query: string) => ({ query })
);
