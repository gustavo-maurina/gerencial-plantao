import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

/**
 * Intercepta requests e executar lógica antes das mesmas serem enviadas.
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public auth: AngularFireAuth) {}

  /**
   * modificar request e incluir jwt nos headers caso haja sessão válida
   * @returns Request após lógica
   */
  getRequestWithJwt(req: HttpRequest<any>, next: HttpHandler) {
    return this.auth.idToken.pipe(
      take(1) /** emitir apenas com primeiro valor */,

      switchMap((token: any) => {
        if (token) {
          req = req.clone({
            setHeaders: { Authorization: `${token}` },
          });
        }
        return next.handle(req);
      })
    );
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.getRequestWithJwt(req, next);
  }
}
