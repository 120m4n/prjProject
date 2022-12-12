import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import  jwt_decode from 'jwt-decode';
import { Mytoken } from '../models/mytoken';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    const token = localStorage.getItem('token') || '';
    // exit if there is no token
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    const tokenPayload = jwt_decode<Mytoken>(token);
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      //this.router.navigate(['login']);
      alert('No tienes permisos para acceder a esta página');
      return false;
    }
    return true;
  }
}
