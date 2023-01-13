import { Component } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { AddonService } from '../services/addon.service';

@Component({
  selector: 'app-pick-addons',
  templateUrl: './pick-addons.component.html',
})
export class PickAddonsComponent {
  addOns: AddOn[] = [];
  constructor(addOnService: AddonService) {
    this.addOns = addOnService.getAddons();
  }
}
