import { Component, Input } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { PlansService } from '../services/plans.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  @Input() plan!: Plan;
  @Input() planOption!: PlanOption;

  constructor(private planService: PlansService) {}

  setSelected() {
    this.planService.setSelectedPlan(this.plan.name);
  }
}
