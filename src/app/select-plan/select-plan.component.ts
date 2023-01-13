import { Component } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { PlansService } from '../services/plans.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
})
export class SelectPlanComponent {
  plans: Plan[];
  planOption: PlanOption;

  constructor(
    private planService: PlansService,
    private subscriptionService: SubscriptionService
  ) {
    this.plans = this.planService.getPlans();
    this.planOption = this.subscriptionService.getPlanOption()
      ? this.subscriptionService.getPlanOption()
      : PlanOption.Monthly;
    this.subscriptionService.setPlanOption(this.planOption);
  }

  togglePlanType() {
    this.planOption =
      this.planOption === PlanOption.Monthly
        ? PlanOption.Yearly
        : PlanOption.Monthly;
    this.subscriptionService.setPlanOption(this.planOption);
  }
}
