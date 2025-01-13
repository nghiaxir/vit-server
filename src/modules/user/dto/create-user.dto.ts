import { Gender, Position } from '@prisma/client';

export class CreateUserDto {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phone: string;
  birthday?: string | number | Date;
  gen?: number;
  hometown?: string;
  address?: string;
  school?: string;
  studentId?: string;
  class?: string;
  cccd?: string;
  dateJoin?: string | number | Date;
  dateOut?: string | number;
  gender?: Gender;
  position?: Position;
}
