import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [];

    getUsers(){
        return this.users;
    }
}
