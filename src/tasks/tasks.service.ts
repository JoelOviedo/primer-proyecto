import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService{
    getTasks(){
        return ['hola 1','hola  bb',' Hola que tal ']
    }
    testing(){
        return ['tes!!']
    }

}