import { UserRepository } from "src/modules/users/repository/UserRepository";

export class UserRepositoryInPrisma implements UserRepository{
    findByRegister(register: string) {
        throw new Error("Method not implemented.");
    }
}