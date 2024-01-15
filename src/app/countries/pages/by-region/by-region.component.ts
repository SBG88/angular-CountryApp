import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {
  public countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term: string): void {
    const result = this.countriesService.searchRegion( term );
    result.subscribe(res => this.countries = res);
  }
}
