import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelDrivenFormComponent } from '../model-driven-form/model-driven-form.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', component: ModelDrivenFormComponent, pathMatch: 'full' },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'guest', component: UserDashboardComponent },
  { path: '**', redirectTo: 'guest' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
