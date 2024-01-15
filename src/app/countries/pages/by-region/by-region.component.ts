import { Component } from '@angular/core';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``
})
export class ByRegionComponent {
  searchByRegion(term: string): void {
    console.log({ term });
  }
}
