import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router, private auth: AngularFireAuth) {}

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['login']));
  }

  ngOnInit(): void {}
}
