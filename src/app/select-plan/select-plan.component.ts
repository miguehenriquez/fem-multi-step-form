import { Component } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { PlanOption } from '../data/PlanOptions';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
})
export class SelectPlanComponent {
  plans = PLANS;
  planType: PlanOption = PlanOption.Yearly;

  togglePlanType() {
    this.planType =
      this.planType === PlanOption.Monthly
        ? PlanOption.Yearly
        : PlanOption.Monthly;
  }
}
