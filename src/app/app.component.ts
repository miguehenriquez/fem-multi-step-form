import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { NAV_LINKS } from './data/mock-data';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'multi-step-form';
  navLinks = NAV_LINKS;
  nextStep: string = '';
  currStep: string = '';
  prevStep: string = '';
  constructor(private router: Router) {
    // console.log(router.url);
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currStep = event.url.slice(1);
        this.setNavSteps(this.currStep);
      }
    });
  }

  setNavSteps(currStep: string) {
    const currIndex = this.navLinks.findIndex(
      (navLink) => navLink.path === currStep
    );
    // console.log(currIndex);
    this.nextStep =
      currIndex < 4
        ? this.navLinks[currIndex + 1].path
        : this.navLinks[currIndex].path;
    this.prevStep = currIndex > 0 ? this.navLinks[currIndex - 1].path : '';
  }
}
