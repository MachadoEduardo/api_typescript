import userService from "../services/user.service.js";
const getCustomers = async (_request, response, next) => {
    try {
        response.json(await userService.getCustomers());
    }
    catch (error) {
        next(error);
    }
};
const getCustomer = async (request, response, next) => {
    try {
        response.json(await userService.getCustomer(request.params.id));
    }
    catch (error) {
        next(error);
    }
};
const createCustomer = async (request, response, next) => {
    try {
        response.status(201).json(await userService.createCustomer(request.body));
    }
    catch (error) {
        next(error);
    }
};
const updateCustomer = async (request, response, next) => {
    try {
        response.json(await userService.updateCustomer(request.params.id, request.body));
    }
    catch (error) {
        next(error);
    }
};
const deleteCustomer = async (request, response, next) => {
    try {
        await userService.deleteCustomer(request.params.id);
        response.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
export default { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer };
//# sourceMappingURL=user.controller.js.map