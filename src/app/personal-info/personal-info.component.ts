import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
}
