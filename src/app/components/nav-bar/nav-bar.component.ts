import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements AfterViewInit {
  @ViewChildren('navItem') navItems?: QueryList<ElementRef>;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange(event.url);
      }
    });
  }

  ngAfterViewInit(): void {
    this.handleRouteChange(window.location.pathname);
  }

  /**
   * Função para alterar cor dos items do menu lateral conforme tela atual
   * @param fullUrl url no formato '/exemplo'
   */
  handleRouteChange(fullUrl: string) {
    const url = fullUrl.replace('/', '');

    this.navItems?.forEach((li) => {
      li.nativeElement.style.color = 'rgb(228 228 231)';
      if (li.nativeElement.id === url)
        li.nativeElement.style.color = 'rgb(96 165 250)';
    });
  }
}
