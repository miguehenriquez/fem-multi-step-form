import { Component, Input } from '@angular/core';
import { NavLink } from '../data/NavLink';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() navLink!: NavLink;
  @Input() currStep!: string;
}
