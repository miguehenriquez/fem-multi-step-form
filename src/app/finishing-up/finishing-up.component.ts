import { Component } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-finishing-up',
  templateUrl: './finishing-up.component.html',
})
export class FinishingUpComponent {
  plan: Plan;
  addons: AddOn[];
  planOption: PlanOption;
  totalDueDesc: string;
  constructor(subscriptionService: SubscriptionService) {
    this.plan = subscriptionService.getPlan();
    this.addons = subscriptionService.getAddons();
    this.planOption = subscriptionService.getPlanOption();
    this.totalDueDesc = subscriptionService.getTotalDueDesc();
  }
}
