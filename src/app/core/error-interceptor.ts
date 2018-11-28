import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError} from "rxjs/operators";
import { AuthService } from "./auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request) 
            .pipe(
                
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        // do stuff with response if you want
                    }
                }, (err: any) => {
                    if(err instanceof HttpErrorResponse) {
                        if(err.status === 401) { 
                            // auto logout if 401 response returned from api
                            this.authService.logout();
                            location.reload(true);
                        }
                        const error = err.error.message || err.statusText;
                    }
                })
                
            )
       
    }

}