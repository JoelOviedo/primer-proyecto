import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import {Request,Response}from 'express'
import { ValidateusersPipe } from './pipes/validateusers/validateusers.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller('prueba')
export class PruebaControllerController {
    @Get('/')
    index(@Req() request:Request, @Res() response:Response) {
        response.status(200).json({
            message:'hello mmundo',
        });
    }
    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not foundXD'
    }
    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe) num: number){
        return num + 32;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateusersPipe) query: {name:string,age:number}){
        return `hello {${query.name}, tu edad es ${query.age}`
    }
}
