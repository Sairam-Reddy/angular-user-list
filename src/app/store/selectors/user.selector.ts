import { createSelector } from '@ngrx/store';
import { User } from '../../components/users-list/models/user.model';
import { UserState } from '../reducers/user.reducer';

export const userSelector = createSelector(
  (state: UserState) => state.users,
  (users: ReadonlyArray<User>) => users
);
