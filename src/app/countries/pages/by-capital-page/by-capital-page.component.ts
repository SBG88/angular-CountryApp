import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor(private countriesServices: CountriesService) {}

  searchByCapital(term: string): void {
    const result = this.countriesServices.searchCapital(term);
    result.subscribe(res => {
      this.countries = res;
    });
  }
}
