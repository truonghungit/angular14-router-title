import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { UserRoutingModule } from './users-routing.module';
import { CreateUserPageComponent, UserDetailPageComponent, UsersPageComponent } from './containers';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,

    UserRoutingModule
  ],
  declarations: [
    UsersPageComponent,
    CreateUserPageComponent,
    UserDetailPageComponent
  ]
})
export class UsersModule { }
