import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { removeCurrentSession } from 'src/utils/sessionUtils';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {}

  logout() {
    removeCurrentSession();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {}
}
