import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseService} from './firebase.service';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate  {
  constructor(private auth: FirebaseService,
              private router: Router) {}

  canActivate(next, state): Observable<boolean>  {
    return this.auth.user.pipe(
      take(1),
      map( user => !!user),
      tap( loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/pages/forms/table/dat-phong']);
        }
      }),
    );
  }
}
