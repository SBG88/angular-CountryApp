import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] =[]
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
    this.countries = this.countriesService.cacheStore.byCountry.countries;
  }

  searchByCountry(term: string): void {
    const result = this.countriesService.searchCountry(term);
    result.subscribe(res => this.countries = res);
  }
}
