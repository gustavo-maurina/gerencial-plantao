import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseSignInProvider } from '@firebase/util';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  async fazerLogin(e: SubmitEvent): Promise<void> {
    e.preventDefault();
    if (!this.loginForm.valid) return;

    const { email, senha } = this.loginForm.value;

    this.auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => this.router.navigate(['inicio']))
      .catch(console.log);
  }

  loginWithGoogle(): void {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this.router.navigate(['inicio']))
      .catch(console.log);
  }

  ngOnInit(): void {}
}
