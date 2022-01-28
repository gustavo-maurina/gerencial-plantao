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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DefaultLayoutComponent,
    InicioComponent,
    TopBarComponent,
  ],
  imports: [
    /* Módulos da aplicação */
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavBarModule,
    /* Módulos de terceiros */
    MatInputModule,
    MatButtonModule,
    NgxChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
