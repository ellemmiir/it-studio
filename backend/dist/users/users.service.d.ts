import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(userData: any): Promise<User>;
    update(id: string, userData: any): Promise<User | null>;
    delete(id: string): Promise<boolean>;
}
