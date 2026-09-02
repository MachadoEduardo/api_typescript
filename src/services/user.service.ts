import { AppError } from "../errors/app-error.js";
import { UserRepository, type IUserRepository } from "../repositories/user.repository.js";
import type { IUser } from "../types.js";
import type { UpdateUserBody } from "../types/http.types.js";

function isUser(value: unknown): value is IUser {
  if (typeof value !== "object" || value === null) return false;

  const user = value as Record<string, unknown>;
  return typeof user.id === "number" && typeof user.name === "string" && typeof user.email === "string";
}

export class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getCustomers(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }

  async getCustomer(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(Number(id));
    if (!user) throw new AppError("Usuário não encontrado", 404);
    return user;
  }

  async createCustomer(data: unknown): Promise<IUser> {
    if (!isUser(data)) {
      throw new AppError("O corpo deve conter id (number), name (string) e email (string)", 400);
    }

    return this.userRepository.create(data);
  }

  async updateCustomer(id: string, data: UpdateUserBody): Promise<IUser> {
    const { name, email } = data;
    if (
      (name !== undefined && typeof name !== "string") ||
      (email !== undefined && typeof email !== "string") ||
      (name === undefined && email === undefined)
    ) {
      throw new AppError("Informe name e/ou email como texto", 400);
    }

    const user = await this.userRepository.update(Number(id), data);
    if (!user) throw new AppError("Usuário não encontrado", 404);
    return user;
  }

  async deleteCustomer(id: string): Promise<void> {
    const deleted = await this.userRepository.delete(Number(id));
    if (!deleted) throw new AppError("Usuário não encontrado", 404);
  }
}

const userRepository = new UserRepository();
export default new UserService(userRepository);

