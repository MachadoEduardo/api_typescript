import type { IProduct, IUser } from "../types.js";

export type EmptyParams = Record<string, never>;
export type EmptyBody = Record<string, never>;
export type EmptyQuery = Record<string, never>;
export type IdParams = { id: string };

export type CreateUserBody = IUser;
export type UpdateUserBody = Partial<Pick<IUser, "name" | "email">>;
export type ProductBody = Omit<IProduct, "id">;

