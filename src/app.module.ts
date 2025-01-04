import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PruebaControllerController } from './prueba-controller/prueba-controller.controller';
import { PruebaControllerService } from './prueba-controller/prueba-controller.service';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/usuario.entidad';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port: 5432,
      username:'postgres',
      password:'postgres',
      database:'prueba_nestDB',
      //url:'postgresql://postgres:postgres@localhost:5432/prueba_nestDB',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    TaskModule, ProjectsModule, UsersModule, AuthModule, PaymentsModule],
  controllers: [PruebaControllerController],
  providers: [PruebaControllerService],
})
export class AppModule {}
