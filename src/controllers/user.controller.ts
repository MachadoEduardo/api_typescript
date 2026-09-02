import type { RequestHandler } from "express";
import userService from "../services/user.service.js";
import type { IUser } from "../types.js";
import type { CreateUserBody, EmptyBody, EmptyParams, EmptyQuery, IdParams, UpdateUserBody } from "../types/http.types.js";

const getCustomers: RequestHandler<EmptyParams, IUser[], EmptyBody, EmptyQuery> = async (_request, response, next) => {
  try {
    response.json(await userService.getCustomers());
  } catch (error: unknown) {
    next(error);
  }
};

const getCustomer: RequestHandler<IdParams, IUser, EmptyBody, EmptyQuery> = async (request, response, next) => {
  try {
    response.json(await userService.getCustomer(request.params.id));
  } catch (error: unknown) {
    next(error);
  }
};

const createCustomer: RequestHandler<EmptyParams, IUser, CreateUserBody, EmptyQuery> = async (request, response, next) => {
  try {
    response.status(201).json(await userService.createCustomer(request.body));
  } catch (error: unknown) {
    next(error);
  }
};

const updateCustomer: RequestHandler<IdParams, IUser, UpdateUserBody, EmptyQuery> = async (request, response, next) => {
  try {
    response.json(await userService.updateCustomer(request.params.id, request.body));
  } catch (error: unknown) {
    next(error);
  }
};

const deleteCustomer: RequestHandler<IdParams, void, EmptyBody, EmptyQuery> = async (request, response, next) => {
  try {
    await userService.deleteCustomer(request.params.id);
    response.status(204).send();
  } catch (error: unknown) {
    next(error);
  }
};

export default { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer };

