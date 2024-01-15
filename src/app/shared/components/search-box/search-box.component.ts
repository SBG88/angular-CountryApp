import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  template: `
    <input
      type="text"
      [placeholder]="placeholder"
      class="form.control"
      (keyup.enter)="setValue( txtInput.value )"
      #txtInput
    />
  `
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  setValue( value: string ): void {
    this.onValue.emit(value);
  }
}
