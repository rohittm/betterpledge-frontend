import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './Service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthenticateService,private router:Router){}
  
  canActivate():boolean{
    if(this.authService.loggedin()){
      return true;
    }else{
      this.router.navigate(['/Login'])
      return false
    }
  }
}
