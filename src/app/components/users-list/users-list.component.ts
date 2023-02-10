import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addUser, getUsers } from '../../store/actions/user.action';
import { UserState } from '../../store/reducers/user.reducer';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { User } from './models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  users$ = this.store.select('users');
  constructor(public dialog: MatDialog, private store: Store<UserState>) {}

  public ngOnInit(): void {
    this.store.dispatch(getUsers());
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
