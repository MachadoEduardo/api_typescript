import type { IUser } from "../types.js";
declare function getCustomers(): IUser[];
declare function getCustomer(id: string): IUser | {
    message: string;
};
declare function createCustomer(data: unknown): IUser | {
    message: string;
};
declare function updateCustomer(id: string, data: Partial<IUser>): IUser | {
    message: string;
};
declare function deleteCustomer(id: string): {
    message: string;
};
declare const _default: {
    getCustomers: typeof getCustomers;
    getCustomer: typeof getCustomer;
    createCustomer: typeof createCustomer;
    updateCustomer: typeof updateCustomer;
    deleteCustomer: typeof deleteCustomer;
};
export default _default;
//# sourceMappingURL=user.service.d.ts.map