import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  primer_nombre: string;

  @Column()
  apellidos: string;

  @Column()
  email: string;

  @Column()
  password:string;
}