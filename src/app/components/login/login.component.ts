import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {
    // console.log(window.firebase);
  }

  async fazerLogin(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    console.log('login');
  }

  loginWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  ngOnInit(): void {}
}
