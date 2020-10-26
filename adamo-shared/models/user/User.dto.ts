
import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/AbstractDto';
import { UserEntity } from '../user.entity';

import { IsString, IsOptional, IsNumber } from 'class-validator';
export class UserDto extends AbstractDto {

  @ApiPropertyOptional()
  @IsString()
  @IsOptional();
  firstName: string;

  @ApiPropertyOptional()
  lastName: string;


  @ApiPropertyOptional({ enum: RoleType })
  role: RoleType;

  @ApiPropertyOptional()
  email: string;


  constructor(user: UserEntity) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
    this.email = user.email;
    // this.avatar = user.avatar;
    // this.phone = user.phone;
  }
}
