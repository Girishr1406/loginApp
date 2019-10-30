import { Component } from '@angular/core';
import {Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginApp';
  showLogin: boolean = false;
  showLogout: boolean = false;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showLogin = false;
        } else if (event['url'] == '/crud') {
          this.showLogout = true;
        } else {
          this.showLogin = true;
          this.showLogout = false;
        }
      }
    });
   }
  LoginBtn = () => {
    this.router.navigate(["login"]);
  };
  LogOutBtn = () => {
    this.router.navigate(["/"]);
  };

}
