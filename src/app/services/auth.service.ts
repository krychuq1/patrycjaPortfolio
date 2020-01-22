import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {SecretProjectsService} from './secret-projects.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private secretProjectsService: SecretProjectsService) { }

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    try {
      await this.secretProjectsService.validateToken();
      return true;
    } catch (e) {
      return false;
    }
  }
}
