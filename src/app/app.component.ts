import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .yellow {
      color: yellow;
      font-weight: 500;
    }
  `]
})
export class AppComponent {
  showPassword = false;
  log = [];
  showDetails() {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length + 1);
  }

}
