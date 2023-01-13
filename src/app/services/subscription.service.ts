import { Injectable } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { PersonalInfo } from '../data/PersonalInfo';
import { Plan } from '../data/Plan';
import { PlanOption } from '../data/PlanOptions';
import { AddonService } from './addon.service';
import { PlansService } from './plans.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private personalInfo!: PersonalInfo;
  private plan!: Plan;
  private addOns!: AddOn[];
  private planOption!: PlanOption;
  private totalDue!: number;

  constructor(planService: PlansService, addonService: AddonService) {}

  setPersonalInfo(name: string, email: string, phone: string) {
    this.personalInfo.name = name;
    this.personalInfo.email = email;
    this.personalInfo.phone = phone;
  }

  private setTotalDue() {
    this.totalDue = this.getPlanTotal() + this.getAddonsTotal();
  }

  getTotalDueDesc() {
    const suffix = this.planOption === 'monthly' ? '/mo' : '/yr';
    return `+$${this.totalDue}${suffix}`;
  }

  getPlanTotal(): number {
    if (!this.plan) {
      return 0;
    }
    return this.planOption === 'monthly'
      ? this.plan.priceMonth
      : this.plan.priceYear;
  }

  getAddonsTotal(): number {
    if (!this.addOns) {
      return 0;
    }
    return this.planOption === 'monthly'
      ? this.addOns.reduce((acc, curr) => acc + curr.priceMonth, 0)
      : this.addOns.reduce((acc, curr) => acc + curr.priceYear, 0);
  }

  setPlan(plan: Plan) {
    this.plan = plan;
    this.setTotalDue();
  }

  getPlan() {
    return this.plan;
  }

  setPlanOption(planOption: PlanOption) {
    this.planOption = planOption;
    this.setTotalDue();
  }

  getPlanOption() {
    return this.planOption;
  }

  setAddons(addons: AddOn[]) {
    this.addOns = addons;
    this.setTotalDue();
  }

  getAddons() {
    return this.addOns;
  }
}
