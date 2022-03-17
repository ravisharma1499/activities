import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<button (click)="onSave()">Save</button>',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-binding';
  onSave() {
    console.log('Save button clicked');
  }
}
