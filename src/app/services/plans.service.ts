import { Injectable } from '@angular/core';
import { PLANS } from '../data/mock-data';
import { Plan } from '../data/Plan';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private plans = PLANS;
  private selectedPlanIndex!: number;
  constructor() {}

  getPlans(): Plan[] {
    return this.plans;
  }

  setSelectedPlan(planName: string) {
    this.plans.forEach((plan) => (plan.isSelected = false));
    this.selectedPlanIndex = this.plans.findIndex(
      (plan) => plan.name === planName
    );
    if (this.selectedPlanIndex >= 0) {
      this.plans[this.selectedPlanIndex].isSelected = true;
    }
  }

  getSelectedPlan(): Plan {
    return this.plans[this.selectedPlanIndex];
  }
}
