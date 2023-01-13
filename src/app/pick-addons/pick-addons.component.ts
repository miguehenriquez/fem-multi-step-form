import { Component } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { PlanOption } from '../data/PlanOptions';
import { AddonService } from '../services/addon.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-pick-addons',
  templateUrl: './pick-addons.component.html',
})
export class PickAddonsComponent {
  addOns: AddOn[] = [];
  constructor(addOnService: AddonService) {
    this.addOns = addOnService.getAddons();
  }
}
