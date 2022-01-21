import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    console.log(this.usuarioAutenticado)
    if (usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true
      this.router.navigate(['/'])
      this.mostrarMenuEmitter.emit(true)

    } else {
      this.usuarioAutenticado = false
      this.mostrarMenuEmitter.emit(false)

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
}
