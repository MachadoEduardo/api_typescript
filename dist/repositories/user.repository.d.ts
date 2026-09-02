import type { IUser } from "../types.js";
export interface IUserRepository {
    findAll(): Promise<IUser[]>;
    findById(id: number): Promise<IUser | undefined>;
    create(user: IUser): Promise<IUser>;
    update(id: number, data: Partial<IUser>): Promise<IUser | undefined>;
    delete(id: number): Promise<boolean>;
}
export declare class UserRepository implements IUserRepository {
    findAll(): Promise<IUser[]>;
    findById(id: number): Promise<IUser | undefined>;
    create(user: IUser): Promise<IUser>;
    update(id: number, data: Partial<IUser>): Promise<IUser | undefined>;
    delete(id: number): Promise<boolean>;
}
//# sourceMappingURL=user.repository.d.ts.map