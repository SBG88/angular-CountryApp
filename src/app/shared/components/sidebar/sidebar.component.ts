import { Component } from '@angular/core';
import { Options } from '../../interfaces/option';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public options: Options[] = [
    {
      name: "Por Capital",
      routerLink: "countries/by-capital",
      routerLinkActive: "active"
    },
    {
      name: "Por País",
      routerLink: "countries/by-country",
      routerLinkActive: "active"
    },
    {
      name: "Por Región",
      routerLink: "countries/by-region",
      routerLinkActive: "active"
    }
  ];
}
