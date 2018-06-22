import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ComponentAdderService } from './component-adder.service';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { PostBloodDonarsService } from './post-blood-donars.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutRoutingModule } from './about/about-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AboutRoutingModule
  ],
  providers: [ComponentAdderService, PostBloodDonarsService, HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [UserDashboardComponent, AdminDashboardComponent]
})
export class AppModule { }
