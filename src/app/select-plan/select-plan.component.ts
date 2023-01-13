import { Component } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { PlansService } from '../services/plans.service';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
})
export class SelectPlanComponent {
  plans: Plan[];
  planType: PlanOption = PlanOption.Yearly;

  constructor(private planService: PlansService) {
    this.plans = this.planService.getPlans();
  }

  togglePlanType() {
    this.planType =
      this.planType === PlanOption.Monthly
        ? PlanOption.Yearly
        : PlanOption.Monthly;
  }
}
