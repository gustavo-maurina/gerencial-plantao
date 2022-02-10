import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TipoCadastroComponent } from './components/tipo-cadastro/tipo-cadastro.component';
import { CriarContaMedicoComponent } from './components/criar-conta-medico/criar-conta-medico.component';
import { CriarContaHospitalComponent } from './components/criar-conta-hospital/criar-conta-hospital.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './RequestInterceptor';
import { AuthGuardModule } from '@angular/fire/auth-guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLayoutComponent,
    InicioComponent,
    TopBarComponent,
    TipoCadastroComponent,
    CriarContaMedicoComponent,
    CriarContaHospitalComponent,
    DashboardComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    /* Módulos de terceiros */
    MatTableModule,
    LoadingBarRouterModule,
    MatInputModule,
    MatButtonModule,
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthGuardModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
