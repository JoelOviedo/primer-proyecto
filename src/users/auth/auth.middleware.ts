import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import {Request ,Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization}=req.headers;
  



    next();
  }
}
