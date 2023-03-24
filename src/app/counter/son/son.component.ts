import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [
  ]
})
export class SonComponent {

  counter: number = 0;

  constructor(private store: Store<AppState>) {
    store.select('count').subscribe(count => this.counter = count);
  }

  multiply() {
    this.store.dispatch(actions.multiply({ number: 2 }));
  }
  
  divide() {
    this.store.dispatch(actions.divide({ number: 2 }));
  }

}
