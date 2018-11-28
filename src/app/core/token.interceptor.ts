import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";
import { Injectable } from "@angular/core";

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authService.currentUserValue;
        //let token = this.authService.getToken();
        if(currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + currentUser.token
                }
            });
        }
        
        return next.handle(request);
    }
}
