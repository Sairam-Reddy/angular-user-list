import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
})
export class UsersListModule {}
