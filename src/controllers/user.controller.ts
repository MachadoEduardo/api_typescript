import type { Request, Response } from "express";
import type { IUser } from "../types.js";
import userService from "../services/user.service.js";

interface UserParams {
    id: string;
}

type UserResponse = IUser | { message: string };
type UsersResponse = IUser[] | { message: string };

function getCustomers(_request: Request, response: Response<UsersResponse>): void {
    const customers = userService.getCustomers();
    response.json(customers);
}

function getCustomer(
    request: Request<UserParams>,
    response: Response<UserResponse>,
): void {
    const user = userService.getCustomer(request.params.id);

    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }

    response.json(user);
}


function createCustomer(
    request: Request<Record<string, never>, UserResponse, unknown>,
    response: Response<UserResponse>,
): void {
    const newUser = userService.createCustomer(request.body);

    if (!newUser) {
        response.status(400).json({ message: "O corpo deve conter id (number), name (string) e email (string)" });
        return;
    }

    response.status(201).json(newUser);
}

function updateCustomer(
    request: Request<UserParams, UserResponse, Partial<IUser>>,
    response: Response<UserResponse>,
): void {
    const user = userService.updateCustomer(request.params.id, request.body);

    if (!user) {
        response.status(404).json({ message: "Usuário não encontrado" });
        return;
    }

    response.status(200).json(user);
}

function deleteCustomer(
    request: Request<UserParams>,
    response: Response<{ message: string }>,
): void {
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
}
