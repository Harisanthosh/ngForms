import { Component, ViewContainerRef } from '@angular/core';
import { User } from 'src/app/user';
import { ComponentAdderService } from './component-adder.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Using Angular Forms';

  roles = ['guest', 'admin'];

  user: User;

  constructor(private service: ComponentAdderService, private viewRef : ViewContainerRef) {

  }
  submit(frmData) {
    this.user = frmData;
    this.service.setViewRef(this.viewRef);
    if (this.user.role === 'guest') {
      this.viewRef.clear();
      this.service.addComponent(UserDashboardComponent);
    }
    else {
      this.viewRef.clear();
      this.service.addComponent(AdminDashboardComponent);
    }

    console.log(this.user);
  }
}
