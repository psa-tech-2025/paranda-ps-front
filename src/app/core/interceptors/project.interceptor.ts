import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PROJECT_CONFIG } from 'src/environments/environment';


@Injectable()
export class ProjectInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const modifiedReq = req.clone({
      setHeaders: {
        'x-project-id': PROJECT_CONFIG.projectId
      }
    });

    return next.handle(modifiedReq);
  }
}
