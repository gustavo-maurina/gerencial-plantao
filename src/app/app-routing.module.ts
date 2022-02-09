import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaHospitalComponent } from './components/criar-conta-hospital/criar-conta-hospital.component';
import { CriarContaMedicoComponent } from './components/criar-conta-medico/criar-conta-medico.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToAccount = () => redirectLoggedInTo(['inicio']);

const routes: Routes = [
  /** Rotas carregadas dentro do sistema */
  {
    component: DefaultLayoutComponent,
    path: '',
    ...canActivate(redirectUnauthorizedToHome),
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      { path: 'inicio', component: InicioComponent },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  /** Rotas carregadas fora da parte administrativa do sistema */
  {
    component: LoginComponent,
    path: 'login',
    ...canActivate(redirectLoggedInToAccount),
  },
  { component: CriarContaMedicoComponent, path: 'criar-conta-medico' },
  { component: CriarContaHospitalComponent, path: 'criar-conta-hospital' },
  { component: TipoCadastroComponent, path: 'tipo-cadastro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
