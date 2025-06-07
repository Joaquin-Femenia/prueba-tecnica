import { Controller, Get, Param, Post, Put, Delete, Body, HttpCode } from '@nestjs/common';
import { UserService} from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Post()
    create(@Body() createUsuarioDto: CreateUserDto){
        return this.userService.create(createUsuarioDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUserDto) {
        return this.userService.update(+id, updateUsuarioDto);
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
