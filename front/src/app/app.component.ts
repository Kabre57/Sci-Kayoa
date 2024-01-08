import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;
  reloading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.recallJsFuntions();
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  recallJsFuntions() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {}
    });
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe((event) => {


        this.loadScript("..assets/js/jquery.min.js");
        this.loadScript("../assets/js/bootstrap.min.js");
        this.loadScript("../assets/js/jquery-plugin-collection.js");
        this.loadScript("../assets/js/script.js");



        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        // window.scrollTo(0, 0);
      });
  }

}