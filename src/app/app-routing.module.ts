import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CursosGuard } from './guard/cursos.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // Sempre que usar o lazy module temos que parar o ng serve, desistalar no appModule (cursosmodule) e retirar o 'cursos' da rota principal
  { path: 'cursos',
    loadChildren: () => import ('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard]
  },

  { path: 'alunos',
    loadChildren: () => import ('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    //canActivateChild: [AlunosGuard]
  },

  { path: 'login', component: LoginComponent},

  { path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  // { path: 'alunoss', loadChildren: () => import ('./alunos/alunos.module').then(m => m.AlunosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
