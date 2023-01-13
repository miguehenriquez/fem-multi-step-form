import { Injectable } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { ADD_ONS } from '../data/mock-data';

@Injectable({
  providedIn: 'root',
})
export class AddonService {
  private addOns = ADD_ONS;
  constructor() {}

  getAddons(): AddOn[] {
    return this.addOns;
  }

  toggleSelection(name: string): AddOn[] {
    const index = this.addOns.findIndex((addOn) => name === addOn.name);
    if (index >= 0) {
      this.addOns[index].isSelected = !this.addOns[index].isSelected;
    }

    return this.getSelectedAddOns();
  }

  getSelectedAddOns(): AddOn[] {
    return this.addOns.filter((addOn) => addOn.isSelected);
  }
}
