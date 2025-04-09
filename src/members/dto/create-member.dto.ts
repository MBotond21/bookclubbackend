import { IsEnum, IsNotEmpty, IsString } from "class-validator";

enum Gender {
  M = "M",
  F = "F"
}

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsEnum(Gender)
  gender?: Gender

  @IsNotEmpty()
  @IsString()
  birth_date: string
}
