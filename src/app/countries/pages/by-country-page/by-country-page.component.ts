import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  searchByCountry(term: string): void {
    console.log({ term });
  }
}
