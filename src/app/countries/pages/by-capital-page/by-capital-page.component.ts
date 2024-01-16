import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries:     Country[] = [];
  public isLoading:     boolean = false;
  public initialValue:  string = '';

  constructor(private countriesServices: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {
    this.isLoading = true;
    const result = this.countriesServices.searchCapital(term);
    result.subscribe(res => {
      this.countries = res;
      this.isLoading = false;
    });
  }
}
