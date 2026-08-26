import type { Request, Response } from "express";
import type { IUser } from "../types.js";
interface UserParams {
    id: string;
}
type UserResponse = IUser | {
    message: string;
};
type UsersResponse = IUser[] | {
    message: string;
};
declare function getCustomers(_request: Request, response: Response<UsersResponse>): void;
declare function getCustomer(request: Request<UserParams>, response: Response<UserResponse>): void;
declare function createCustomer(request: Request<Record<string, never>, UserResponse, unknown>, response: Response<UserResponse>): void;
declare function updateCustomer(request: Request<UserParams, UserResponse, Partial<IUser>>, response: Response<UserResponse>): void;
declare function deleteCustomer(request: Request<UserParams>, response: Response<{
    message: string;
}>): void;
declare const _default: {
    getCustomers: typeof getCustomers;
    getCustomer: typeof getCustomer;
    createCustomer: typeof createCustomer;
    updateCustomer: typeof updateCustomer;
    deleteCustomer: typeof deleteCustomer;
};
export default _default;
//# sourceMappingURL=user.controller.d.ts.map