import { Component, Input } from '@angular/core';
import { AddOn } from '../data/AddOn';
import { AddonService } from '../services/addon.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
})
export class AddonComponent {
  @Input() addOn!: AddOn;

  constructor(private addOnService: AddonService) {}

  toggleAddon() {
    this.addOnService.toggleSelection(this.addOn.name);
  }
}
