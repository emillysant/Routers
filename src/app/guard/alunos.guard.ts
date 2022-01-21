import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AlunosGuard implements CanActivateChild {

  constructor(){}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {

      console.log('canActivateChild-alunos')
      console.log('Rota Ativada', childRoute)
      console.log('estado da rota', state)

      if (state.url.includes('editar')){
        // alert('No permission')
        // return false
      }
      return true
  }
}
