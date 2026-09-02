import { AppError } from "../errors/app-error.js";
import { UserRepository } from "../repositories/user.repository.js";
function isUser(value) {
    if (typeof value !== "object" || value === null)
        return false;
    const user = value;
    return typeof user.id === "number" && typeof user.name === "string" && typeof user.email === "string";
}
export class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getCustomers() {
        return this.userRepository.findAll();
    }
    async getCustomer(id) {
        const user = await this.userRepository.findById(Number(id));
        if (!user)
            throw new AppError("Usuário não encontrado", 404);
        return user;
    }
    async createCustomer(data) {
        if (!isUser(data)) {
            throw new AppError("O corpo deve conter id (number), name (string) e email (string)", 400);
        }
        return this.userRepository.create(data);
    }
    async updateCustomer(id, data) {
        const { name, email } = data;
        if ((name !== undefined && typeof name !== "string") ||
            (email !== undefined && typeof email !== "string") ||
            (name === undefined && email === undefined)) {
            throw new AppError("Informe name e/ou email como texto", 400);
        }
        const user = await this.userRepository.update(Number(id), data);
        if (!user)
            throw new AppError("Usuário não encontrado", 404);
        return user;
    }
    async deleteCustomer(id) {
        const deleted = await this.userRepository.delete(Number(id));
        if (!deleted)
            throw new AppError("Usuário não encontrado", 404);
    }
}
const userRepository = new UserRepository();
export default new UserService(userRepository);
//# sourceMappingURL=user.service.js.map