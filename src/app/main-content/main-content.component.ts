import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
})
export class MainContentComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
