import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service'
import { AuthGuard } from './guard/auth.guard';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';
import { CursosGuard } from './guard/cursos.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
  FormsModule,
    BrowserModule,
    AppRoutingModule,
    // CursosModule,
    // AlunosModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard
  ]
})
export class AppModule { }
