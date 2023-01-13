import { Component, Input } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  @Input() plan!: Plan;
  @Input() planType!: PlanOption;
  @Input() plans!: Plan[];

  togleIsSelected() {
    this.plans.forEach((plan) => (plan.isSelected = false));
    this.plan.isSelected = !this.plan.isSelected;
  }
}
