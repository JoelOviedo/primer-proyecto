import { Body, Controller,Delete,Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import {  createUsersDto } from './dto/create-user.dto';
import { UpdateUsersDto } from './dto/update-user.dto';
import { User } from './usuario.entidad';

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    
     // Crear un nuevo usuario
  @Post()
  async create(@Body() body: Partial<User>): Promise<User> {
    return this.usersService.create(body);
  }

  // Obtener todos los usuarios
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // Obtener un usuario por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  // Actualizar un usuario
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: Partial<User>,
  ): Promise<User> {
    return this.usersService.update(id, body);
  }

  // Eliminar un usuario
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.usersService.delete(id);
  }
     
}

