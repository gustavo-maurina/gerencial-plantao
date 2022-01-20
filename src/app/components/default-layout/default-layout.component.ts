import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import hasValidSession from 'src/utils/hasValidSession';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  constructor(router: Router) {
    if (!hasValidSession()) router.navigate(['login']);
  }

  ngOnInit(): void {}
}
