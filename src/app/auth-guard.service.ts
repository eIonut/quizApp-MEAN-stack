import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router,
              private stateService: StateService) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {

    if (!this.stateService.getState()) {
      this.stateService.setRedirectState(true);
      this.router.navigate(["home"]);
      return false;
    }

    return true;
  }
}
