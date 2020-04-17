import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recaptcha';
  recaptcha: string;

  constructor() { }

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
    console.log(`{this.recaptcha}`);
  }
}
