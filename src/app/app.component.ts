import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal';
  constructor() {
    const userLanguage =  'en'; 

    // Load the appropriate stylesheet
    this.loadStylesheet(userLanguage);
  }

  private loadStylesheet(language: string): void {
    const linkElement = document.createElement('link');
    linkElement.href = `src/Styles/styles-${language}.css`;
    //linkElement.rel = 'stylesheet';
    linkElement.type="text/css";
    document.head.appendChild(linkElement);
  }
}
