import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class EditTagDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  }