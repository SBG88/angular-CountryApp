import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  template: `
    <input
      type="text"
      [value]="initialValue"
      [placeholder]="placeholder"
      class="form.control"
      (keyup.enter)="setValue( txtInput.value )"
      (keyup)="onKeyPress(txtInput.value)"
      
      #txtInput
    />
  `
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>()
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  setValue( value: string ): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string): void {
    this.debouncer.next(searchTerm);
  }
}