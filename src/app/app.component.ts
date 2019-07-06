import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd , Event} from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myschool-website';
  constructor(
    private lBar: SlimLoadingBarService,
    private  router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      console.log(event);
      this.loadingBarInterceptor(event);
    });
  }
  private loadingBarInterceptor(event: Event) {
    if (event instanceof NavigationStart) {
      this.lBar.start();
    }
    if (event instanceof NavigationEnd) {
      this.lBar.complete();
    }
  }
}
