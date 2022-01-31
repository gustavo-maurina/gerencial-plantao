import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { setNewSession } from 'src/utils/sessionUtils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  user: any;

  async fazerLogin(e: SubmitEvent): Promise<void> {
    e.preventDefault();
  }

  loginWithGoogle(): void {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        setNewSession(true);
        this.router.navigate(['']);
      });
  }

  ngOnInit(): void {}
}
