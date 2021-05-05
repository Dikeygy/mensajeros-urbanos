import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appMensajerosUrbanos';

  body = document.body;

  constructor() { }

  addMyClass() {
    if (this.body.classList.contains('mode-dark')) {
      this.body.classList.replace('mode-dark', 'mode-light')
    } else {
      this.body.classList.replace('mode-light', 'mode-dark')
    }
  }
}
