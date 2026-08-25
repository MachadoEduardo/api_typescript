import { users } from "../models/user.js";
function isUser(value) {
    if (typeof value !== "object" || value === null)
        return false;
    const user = value;
    return (typeof user.id === "number" &&
        typeof user.name === "string" &&
        typeof user.email === "string");
}
function getCustomers(_request, response) {
    response.json(users);
}
function getCustomer(request, response) {
    const user = users.find((item) => item.id === Number(request.params.id));
    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    response.json(user);
}
function createCustomer(request, response) {
    if (!isUser(request.body)) {
        response.status(400).json({
            message: "O corpo deve conter id (number), name (string) e email (string)",
        });
        return;
    }
    users.push(request.body);
    response.status(201).json(request.body);
}
function updateCustomer(request, response) {
    const user = users.find((item) => item.id === Number(request.params.id));
    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    const { name, email } = request.body;
    if ((name !== undefined && typeof name !== "string") ||
        (email !== undefined && typeof email !== "string") ||
        (name === undefined && email === undefined)) {
        response.status(400).json({ message: "Informe name e/ou email como texto" });
        return;
    }
    Object.assign(user, { name, email });
    response.json(user);
}
function deleteCustomer(request, response) {
    const index = users.findIndex((item) => item.id === Number(request.params.id));
    if (index === -1) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    users.splice(index, 1);
    response.status(204).send();
}
export default {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};
//# sourceMappingURL=user.controller.js.map