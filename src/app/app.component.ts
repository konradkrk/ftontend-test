import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: any;

  constructor(private appService: AppService, private router: Router) {
    this.appService.getUserLogin();

    this.appService.user.pipe().subscribe((res) => {
      console.log('res', res)
      this.user = res;
    })
  }

  logout() {
    this.appService.logout();
    this.router.navigate(['/']);
  }
}
