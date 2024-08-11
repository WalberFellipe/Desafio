import { ApiError } from "../services/api";

const apiErrorHandler = (error: unknown) => {  
  console.error("API Error:", error);
  if (typeof error === "object" && error !== null) {
    const typedError = error as ApiError;

    if (typedError.error === "AuthError") {
      return "";
    } else if (typedError.error === "NetworkError") {
      return "Problema de conexão. Verifique sua internet e tente novamente.";
    } else if (typedError.message === "Internal server error") {
      return "Ocorreu um erro inesperado. Tente novamente mais tarde.";
    } else if (typedError.error === "ApiError") {
      const message = Array.isArray(typedError.message)
        ? typedError.message[0]
        : typedError.message;

      return message || "Erro ao processar a solicitação.";
    } else {
      return "Ocorreu um erro inesperado. Tente novamente mais tarde.";
    }
  } else {
    return "Ocorreu um erro inesperado. Tente novamente mais tarde.";
  }
};

export { apiErrorHandler };

