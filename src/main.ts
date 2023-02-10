import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { UsersListModule } from './app/components/users-list/users-list.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

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

bootstrapApplication(App, {
  providers: [
    importProvidersFrom([
      BrowserAnimationsModule,
      BrowserModule,
      NoopAnimationsModule,
    ]),
  ],
});
