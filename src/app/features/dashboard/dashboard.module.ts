import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './containers/overview/overview.component';
import { Route, RouterModule } from '@angular/router';

const routes: Array<Route> = [
  {
    path: '',
    component: OverviewComponent
  }
]

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
