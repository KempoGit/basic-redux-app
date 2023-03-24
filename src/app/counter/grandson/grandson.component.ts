import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [
  ]
})
export class GrandsonComponent {

  counter: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('count').subscribe(count => this.counter = count);
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

}
