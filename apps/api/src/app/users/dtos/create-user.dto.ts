import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Obrigatório' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Obrigatório' })
  email: string;

  @IsNotEmpty({ message: 'Obrigatório' })
  username: string;

  @MinLength(6, { message: 'mínimo 6 caracteres' })
  password: string;
}
