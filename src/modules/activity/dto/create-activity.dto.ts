import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ActivityTimeDto } from './';

export class CreateActivityDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isCampain: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  deadline: Date;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ActivityTimeDto)
  times: ActivityTimeDto[];

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  eventId: string;
}
