import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bindings';
  itemImageUrl = '../assets/images/sunrise.jpeg';
  hasSmallBorder = true;
  hasThickBorder = true;
  hasDottedBorder = true;
}
