import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("../schemas/user.schema").User>;
    update(id: string, userData: any): Promise<import("../schemas/user.schema").User>;
    delete(id: string): Promise<boolean>;
}
