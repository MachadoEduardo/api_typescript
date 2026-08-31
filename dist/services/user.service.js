import { users } from "../models/user.js";
function isUser(value) {
    if (typeof value !== "object" || value === null)
        return false;
    const user = value;
    return (typeof user.id === "number" &&
        typeof user.name === "string" &&
        typeof user.email === "string");
}
function getCustomers() {
    return users;
}
function getCustomer(id) {
    const user = users.find((item) => item.id === Number(id));
    if (!user) {
        return { message: "Usuário não encontrado" };
    }
    return user;
}
function createCustomer(data) {
    if (!isUser(data)) {
        return { message: "O corpo deve conter id (number), name (string) e email (string)" };
    }
    users.push(data);
    return data;
}
function updateCustomer(id, data) {
    const user = users.find((item) => item.id === Number(id));
    if (!user) {
        return { message: "Usuário não encontrado" };
    }
    const { name, email } = data;
    if ((name !== undefined && typeof name !== "string") ||
        (email !== undefined && typeof email !== "string") ||
        (name === undefined && email === undefined)) {
        return { message: "Informe name e/ou email como texto" };
    }
    Object.assign(user, { name, email });
    return user;
}
function deleteCustomer(id) {
    const index = users.findIndex((item) => item.id === Number(id));
    if (index === -1) {
        return { message: "Usuário não encontrado" };
    }
    users.splice(index, 1);
    return { message: "Usuário deletado com sucesso" };
}
export default {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
//# sourceMappingURL=user.service.js.map