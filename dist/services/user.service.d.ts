import { type IUserRepository } from "../repositories/user.repository.js";
import type { IUser } from "../types.js";
import type { UpdateUserBody } from "../types/http.types.js";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: IUserRepository);
    getCustomers(): Promise<IUser[]>;
    getCustomer(id: string): Promise<IUser>;
    createCustomer(data: unknown): Promise<IUser>;
    updateCustomer(id: string, data: UpdateUserBody): Promise<IUser>;
    deleteCustomer(id: string): Promise<void>;
}
declare const _default: UserService;
export default _default;
//# sourceMappingURL=user.service.d.ts.map