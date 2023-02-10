import { createSelector } from '@ngrx/store';
import { User } from '../../components/users-list/models/user.model';
import { UserState } from '../reducers/user.reducer';

export const userSelector = createSelector(
  (state: UserState) => state.users,
  (state: UserState) => state.query,
  (users: ReadonlyArray<User>, query: Readonly<string>) =>
    query
      ? users.filter(
          (user: User) =>
            user.name.includes(query) || user.email.includes(query)
        )
      : users
);
