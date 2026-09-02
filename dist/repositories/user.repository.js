import { users } from "../models/user.js";
export class UserRepository {
    async findAll() {
        return users;
    }
    async findById(id) {
        return users.find((user) => user.id === id);
    }
    async create(user) {
        users.push(user);
        return user;
    }
    async update(id, data) {
        const user = await this.findById(id);
        if (!user)
            return undefined;
        Object.assign(user, data);
        return user;
    }
    async delete(id) {
        const index = users.findIndex((user) => user.id === id);
        if (index === -1)
            return false;
        users.splice(index, 1);
        return true;
    }
}
//# sourceMappingURL=user.repository.js.map