import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction(
    '[Multiply] Multiply',
    props<{number: number}>()
);
export const divide = createAction(
    '[Divide] Divide',
    props<{number: number}>()
);
export const reset = createAction('[Counter] Reset');