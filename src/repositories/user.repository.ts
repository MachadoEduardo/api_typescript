import { users } from "../models/user.js";
import type { IUser } from "../types.js";

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: number): Promise<IUser | undefined>;
  create(user: IUser): Promise<IUser>;
  update(id: number, data: Partial<IUser>): Promise<IUser | undefined>;
  delete(id: number): Promise<boolean>;
}

export class UserRepository implements IUserRepository {
  async findAll(): Promise<IUser[]> {
    return users;
  }

  async findById(id: number): Promise<IUser | undefined> {
    return users.find((user) => user.id === id);
  }

  async create(user: IUser): Promise<IUser> {
    users.push(user);
    return user;
  }

  async update(id: number, data: Partial<IUser>): Promise<IUser | undefined> {
    const user = await this.findById(id);
    if (!user) return undefined;

    Object.assign(user, data);
    return user;
  }

  async delete(id: number): Promise<boolean> {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}
