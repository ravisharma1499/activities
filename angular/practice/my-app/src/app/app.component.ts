import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  intervalSub;
  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log('tick');
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
  getMin(a: number,b: number): number {
    return Math.min(a,b);
  }
}
