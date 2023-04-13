import { User } from "../entities/user.entity";

export abstract class UserRepository{
    abstract findByRegister(register: string):Promise<User>
}