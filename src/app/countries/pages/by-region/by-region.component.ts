import { Region } from './../../interfaces/region.type';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent implements OnInit{
  public countries:       Country[] = []
  public regions:         Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {
    this.selectedRegion = region;
    const result = this.countriesService.searchRegion( region );

    result.subscribe(res => this.countries = res);
  }
}
