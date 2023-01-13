import { Component, Input } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { PlanOption } from '../data/PlanOptions';
import { AddonService } from '../services/addon.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
})
export class AddonComponent {
  @Input() addOn!: AddOn;
  planOption: PlanOption;

  constructor(
    private addOnService: AddonService,
    private subscriptionService: SubscriptionService
  ) {
    this.planOption = subscriptionService.getPlanOption();
  }

  toggleAddon() {
    const addons = this.addOnService.toggleSelection(this.addOn.name);
    this.subscriptionService.setAddons(addons);
  }
}
