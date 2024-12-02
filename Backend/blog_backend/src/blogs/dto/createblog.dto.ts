
import { IsString, IsNumber, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDTO } from 'src/profile/dto/createprofile.dto';
export class CreateBlogDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  blog: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
@Type(() => CreateProfileDTO) 
  profiles: CreateProfileDTO[];
}

