import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserEntity } from '../models/user.entity';
import { User } from '../models/user.interface';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() user: User): Promise<UserEntity> {
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<UserEntity> {
        return this.userService.findOne(Number(id));
    }

    @Get()
    findAll(): Promise<UserEntity[]> {
        console.log("hello")
        return this.userService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Promise<UserEntity> {
        return this.userService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Promise<UserEntity> {
        return this.userService.updateOne(Number(id), user);
    }
}
