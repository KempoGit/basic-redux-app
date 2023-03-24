import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';

  counter: number = 0;

  constructor( private store: Store<AppState>) {
    this.store.select('count').subscribe( count => this.counter = count );
  }

  increase() {
    this.store.dispatch(actions.increment());
  }

  decrease() {
    this.store.dispatch(actions.decrement());
  }

}
