import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router, private auth: AngularFireAuth) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url.replace('/', '');
        this.createTopBarTitle();
      }
    });
  }

  ngOnInit(): void {
    this.createTopBarTitle();

    this.auth.currentUser.then((user) => {
      if (user?.displayName)
        this.iniciais = this.createIniciais(user.displayName);
    });
  }

  url: string = '';
  titleFormatado: string = '';
  iniciais: string | undefined;

  createTopBarTitle() {
    if (!this.url) {
      this.titleFormatado = 'Início';
      return;
    }
    const firstLetterUpper = this.url[0].toUpperCase();
    this.titleFormatado = firstLetterUpper + this.url.slice(1, this.url.length);
  }

  createIniciais(nome: string): string {
    const nomeSplit = nome.split(' ');
    return nomeSplit[0][0] + nomeSplit[1][0];
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }
}
