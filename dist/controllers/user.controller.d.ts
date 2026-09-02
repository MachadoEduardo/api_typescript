import type { RequestHandler } from "express";
import type { IUser } from "../types.js";
import type { EmptyBody, EmptyParams, EmptyQuery, IdParams } from "../types/http.types.js";
declare const _default: {
    getCustomers: RequestHandler<EmptyParams, IUser[], EmptyBody, EmptyQuery, Record<string, any>>;
    getCustomer: RequestHandler<IdParams, IUser, EmptyBody, EmptyQuery, Record<string, any>>;
    createCustomer: RequestHandler<EmptyParams, IUser, IUser, EmptyQuery, Record<string, any>>;
    updateCustomer: RequestHandler<IdParams, IUser, Partial<Pick<IUser, "name" | "email">>, EmptyQuery, Record<string, any>>;
    deleteCustomer: RequestHandler<IdParams, void, EmptyBody, EmptyQuery, Record<string, any>>;
};
export default _default;
//# sourceMappingURL=user.controller.d.ts.map