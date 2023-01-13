import { Injectable } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { PersonalInfo } from '../data/PersonalInfo';
import { Plan } from '../data/Plan';
import { AddonService } from './addon.service';
import { PlansService } from './plans.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private personalInfo!: PersonalInfo;
  private plan!: Plan;
  private addOns!: AddOn[];
  constructor(planService: PlansService, addonService: AddonService) {}

  setPersonalInfo(name: string, email: string, phone: string) {
    this.personalInfo.name = name;
    this.personalInfo.email = email;
    this.personalInfo.phone = phone;
  }

  setPlan(plan: Plan) {
    this.plan = plan;
  }

  getPlan() {
    return this.plan;
  }

  setPlanOption() {}

  getPlanOptions() {}

  setAddons(addons: AddOn[]) {
    this.addOns = addons;
  }

  getAddons() {
    return this.addOns;
  }
}
