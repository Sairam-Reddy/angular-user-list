import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UsersListModule } from './app/components/users-list/users-list.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UsersListModule],
  template: `
    <app-users-list></app-users-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
