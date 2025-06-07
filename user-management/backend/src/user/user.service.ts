import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    private users: User[] = [];
    private nextId: number = 1;

    public findAll(): User[] {
        return this.users;
    }

    public findOne(id: number): User | NotFoundException{
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`No se encontro ningun usuario con el id ${id}`);
        }
        return user;
    }
    
    public create(user: CreateUserDto): User {
        const newUser: User = {
            id: this.nextId++,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }

    public update(id: number, user: UpdateUserDto): User | NotFoundException {
        const index = this.users.findIndex(u => u.id === id);
        if (index === -1) {
            throw new NotFoundException(`No se encontro ningun usuario con el id ${id}`);
        }
        this.users[index] = { ...this.users[index], ...user, id };
        return this.users[index];
    }

    public remove(id: number): void | NotFoundException {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new NotFoundException(`No se encontro ningun usuario con el id ${id}`);
        }
        this.users.splice(index, 1);
    }
}
