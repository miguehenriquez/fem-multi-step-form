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
import { SubscriptionService } from './services/subscription.service';

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
  hasPlan: boolean = false;
  constructor(private router: Router, private subService: SubscriptionService) {
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
    this.nextStep =
      currIndex < 4
        ? this.navLinks[currIndex + 1].path
        : this.navLinks[currIndex].path;

    this.prevStep = currIndex > 0 ? this.navLinks[currIndex - 1].path : '';

    if (this.nextStep === 'thank-you') {
      this.hasPlan = this.subService.getPlan() != undefined ? true : false;
      console.log(this.hasPlan);
    }
  }
}
