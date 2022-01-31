import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarContaHospitalComponent } from './components/criar-conta-hospital/criar-conta-hospital.component';
import { CriarContaMedicoComponent } from './components/criar-conta-medico/criar-conta-medico.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';

const routes: Routes = [
  /** Rotas carregadas dentro do sistema */
  {
    component: DefaultLayoutComponent,
    path: '',
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
    ],
  },
  /** Rotas carregadas fora do sistema */
  { component: LoginComponent, path: 'login' },
  { component: CriarContaMedicoComponent, path: 'criar-conta-medico' },
  { component: CriarContaHospitalComponent, path: 'criar-conta-hospital' },
  { component: TipoCadastroComponent, path: 'tipo-cadastro' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
