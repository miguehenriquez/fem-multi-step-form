import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { NAV_LINKS } from './data/mock-data';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'multi-step-form';

  navLinks = NAV_LINKS;
}
