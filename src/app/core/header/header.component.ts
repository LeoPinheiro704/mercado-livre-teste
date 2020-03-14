import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  search = new FormControl('');

  @Output()
  public searchTextChange = new EventEmitter<string>();

  private searchChangeObserver: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscribeToSearchChange();
  }

  ngOnDestroy() {
    this.searchChangeObserver.unsubscribe();
  }

  logoClicked() { }

  public subscribeToSearchChange(): void {
    this.searchChangeObserver = this.search.valueChanges.pipe(
      //vai esperar 650ms para enviar o evento
      debounceTime(650),
      //checa se o valor do evento atual é diferente ao do anterior
      distinctUntilChanged(),
    )
      .subscribe((value: string) => this.searchTextChange.emit(value));
      // function(valor) {
      //   this.searchTextChange = valor;
      // }
  }

}
