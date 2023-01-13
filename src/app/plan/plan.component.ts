import { Component, Input } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { PlansService } from '../services/plans.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  @Input() plan!: Plan;
  @Input() planOption!: PlanOption;

  constructor(
    private planService: PlansService,
    private subscriptionService: SubscriptionService
  ) {}

  setSelected() {
    this.planService.setSelectedPlan(this.plan.name);
    this.subscriptionService.setPlan(this.plan);
  }
}
