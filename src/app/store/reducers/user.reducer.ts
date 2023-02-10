import { on, createReducer } from '@ngrx/store';
import { User } from '../../components/users-list/models/user.model';
import { getUsers } from '../actions/user.action';

export interface UserState {
  users: ReadonlyArray<User>;
}

const initialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
  initialState,
  on(getUsers, (state) => [...state])
);
