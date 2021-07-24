import { Column, Entity,PrimaryGeneratedColumn, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;

  @Column()
  city: string;
}