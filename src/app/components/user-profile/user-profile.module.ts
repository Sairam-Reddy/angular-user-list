import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabComponent } from '../tab/tab.component';
import { UserProfileComponent } from './user-profile.component';

@NgModule({
  imports: [CommonModule, MatTabsModule],
  declarations: [UserProfileComponent, TabComponent],
  exports: [UserProfileComponent, TabComponent],
})
export class UserProfileModule {}
