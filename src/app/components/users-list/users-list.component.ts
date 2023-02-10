import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subject, debounceTime } from 'rxjs';
import {
  addUser,
  getUsers,
  updateQuery,
} from '../../store/actions/user.action';
import { UserState } from '../../store/reducers/user.reducer';
import { userSelector } from '../../store/selectors/user.selector';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$ = this.store.pipe(select(userSelector));
  query: string = '';
  searchSubject$ = new Subject<string>();

  constructor(public dialog: MatDialog, private store: Store<UserState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.searchSubject$.pipe(debounceTime(200)).subscribe((x) => {
      this.store.dispatch(updateQuery(x));
    });
  }

  inputChanged($event) {
    this.searchSubject$.next($event);
  }

  public createUser(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((user: User) => {
      if (user) {
        this.store.dispatch(addUser(user));
      }
    });
  }
}
