import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: Omit<User, 'id'>): User {
    return this.userService.create(user);
  }
}