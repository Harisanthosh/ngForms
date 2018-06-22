import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { Route, Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: []
})
export class AboutModule { }
