import { AppError } from "../errors/app-error.js";
export const errorHandler = (error, _request, response, _next) => {
    if (error instanceof AppError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
    }
    console.error(error);
    response.status(500).json({ message: "Erro interno do servidor" });
};
//# sourceMappingURL=error-handler.middleware.js.map