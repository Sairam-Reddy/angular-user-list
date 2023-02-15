import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { MatChipsModule } from '@angular/material/chips';
import { queryReducer, userReducer } from '../../store/reducers/user.reducer';
import { CreateUserDialogModule } from '../create-user-dialog/create-user-dialog.module';
import { UsersListComponent } from './users-list.component';
import { UserProfileModule } from '../user-profile/user-profile.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'myDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'name', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'email', keypath: 'email', options: { unique: false } },
      ],
    },
  ],
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatChipsModule,
    CreateUserDialogModule,
    UserProfileModule,
    StoreModule.forRoot({ users: userReducer, query: queryReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
})
export class UsersListModule {}
