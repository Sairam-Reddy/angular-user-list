import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../store/reducers/user.reducer';
import { CreateUserDialogModule } from '../create-user-dialog/create-user-dialog.module';
import { UsersListComponent } from './users-list.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    CreateUserDialogModule,
    StoreModule.forRoot({ users: userReducer }),
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
})
export class UsersListModule {}
