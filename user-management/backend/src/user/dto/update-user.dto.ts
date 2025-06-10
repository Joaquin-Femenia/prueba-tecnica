import { IsEmail, IsOptional, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name?: string;
  
  @IsOptional()
  @IsEmail()
  email?: string;
}
