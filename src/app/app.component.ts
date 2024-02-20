import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Admin';
  hideNavbarFooter: boolean = false;


  constructor(private router: Router) {
    // Subscribe to router events to detect navigation end
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check the current route and hide navbar and footer if necessary
        this.hideNavbarFooter = this.shouldHideNavbarFooter();
      }
    });
  }

  // Function to determine whether to hide navbar and footer based on current route
  shouldHideNavbarFooter(): boolean {
    // Get the current route URL
    const currentRoute = this.router.url;

    // Check if the current route matches the ones where navbar and footer should be hidden
    return currentRoute.includes('/login') ;
  }
}
