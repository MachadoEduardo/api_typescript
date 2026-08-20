import express from "express";
import type { Request, Response } from "express";
import type { IUser } from "./types.js";

const app = express();
const port = 3000;

app.use(express.json());

const users: IUser[] = [
  { id: 1, name: "Ana", email: "ana@email.com" },
  { id: 2, name: "Bruno", email: "bruno@email.com" },
];

interface UserParams {
  id: string;
}

type UserResponse = IUser | { message: string };
type UsersResponse = IUser[] | { message: string };

function isUser(value: unknown): value is IUser {
  if (typeof value !== "object" || value === null) return false;

  const user = value as Record<string, unknown>;
  return (
    typeof user.id === "number" &&
    typeof user.name === "string" &&
    typeof user.email === "string"
  );
}

app.get(
  "/users",
  (_request: Request, response: Response<UsersResponse>): void => {
    response.json(users);
  },
);

app.get(
  "/users/:id",
  (
    request: Request<UserParams>,
    response: Response<UserResponse>,
  ): void => {
    const user = users.find((item) => item.id === Number(request.params.id));

    if (!user) {
      response.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    response.json(user);
  },
);

app.post(
  "/users",
  (
    request: Request<Record<string, never>, UserResponse, unknown>,
    response: Response<UserResponse>,
  ): void => {
    if (!isUser(request.body)) {
      response.status(400).json({
        message: "O corpo deve conter id (number), name (string) e email (string)",
      });
      return;
    }

    users.push(request.body);
    response.status(201).json(request.body);
  },
);

app.put(
  "/users/:id",
  (
    request: Request<UserParams, UserResponse, Partial<IUser>>,
    response: Response<UserResponse>,
  ): void => {
    const user = users.find((item) => item.id === Number(request.params.id));

    if (!user) {
      response.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    const { name, email } = request.body;
    if (
      (name !== undefined && typeof name !== "string") ||
      (email !== undefined && typeof email !== "string") ||
      (name === undefined && email === undefined)
    ) {
      response.status(400).json({ message: "Informe name e/ou email como texto" });
      return;
    }

    Object.assign(user, { name, email });
    response.json(user);
  },
);

app.delete(
  "/users/:id",
  (
    request: Request<UserParams>,
    response: Response<{ message: string }>,
  ): void => {
    const index = users.findIndex(
      (item) => item.id === Number(request.params.id),
    );

    if (index === -1) {
      response.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    users.splice(index, 1);
    response.status(204).send();
  },
);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
