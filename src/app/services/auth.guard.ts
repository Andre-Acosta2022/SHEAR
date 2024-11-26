import { inject, Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard: CanActivateFn = (route, state) => {
const authService= inject(AuthService) ;
const router =inject(Router);
if (authService.isAuthenticated()){
  return true;
}else{
  return router.navigate(['/login']);
}
};