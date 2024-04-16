import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: [
    './page-not-found.css'
  ]
})
export class PageNotFoundComponent {
  currentYear: number = new Date().getFullYear();
}
