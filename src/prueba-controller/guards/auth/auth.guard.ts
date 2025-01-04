import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
     const request= context.switchToHttp().getRequest() as Request;
     console.log("esta url que llega ",request.url);
     if (request.url === '/prueba/greet') return false

    return true;
  }
}
