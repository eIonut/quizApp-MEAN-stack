import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public initialState = false;
  public redirectState = false;

  constructor() { }

  public setState(state: boolean) {
    this.initialState = state;
  }

  public getState() {
    return this.initialState;
  }

  public setRedirectState(state: boolean) {
    this.redirectState = state;
  }

  public getRedirectState() {
    return this.redirectState;
  }
}
