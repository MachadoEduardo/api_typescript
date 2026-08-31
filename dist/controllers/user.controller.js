import userService from "../services/user.service.js";
function getCustomers(_request, response) {
    const customers = userService.getCustomers();
    response.json(customers);
}
function getCustomer(request, response) {
    const user = userService.getCustomer(request.params.id);
    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    response.json(user);
}
function createCustomer(request, response) {
    const newUser = userService.createCustomer(request.body);
    if (!newUser) {
        response.status(400).json({ message: "O corpo deve conter id (number), name (string) e email (string)" });
        return;
    }
    response.status(201).json(newUser);
}
function updateCustomer(request, response) {
    const user = userService.updateCustomer(request.params.id, request.body);
    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    response.status(200).json(user);
}
function deleteCustomer(request, response) {
    const result = userService.deleteCustomer(request.params.id);
    if (result.message) {
        response.status(404).json(result);
        return;
    }
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