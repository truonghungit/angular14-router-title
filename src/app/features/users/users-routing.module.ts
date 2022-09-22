import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserPageComponent, UserDetailPageComponent, UsersPageComponent } from './containers';
import { UserDetailTitleResolve } from './services/user-detail-title.resolve';

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: 'create',
    title: 'Create User',
    component: CreateUserPageComponent
  },
  {
    path: ':id',
    title: UserDetailTitleResolve,
    component: UserDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
