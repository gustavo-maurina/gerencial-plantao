import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    component: DefaultLayoutComponent,
    path: '',
    children: [],
  },
  { component: LoginComponent, path: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
