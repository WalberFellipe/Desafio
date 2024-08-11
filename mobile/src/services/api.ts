import axios, { AxiosError } from "axios";
import {
  StorageKeys,
  getStorageString,
  storeString,
} from "../helpers/async-storage";
import { emitter } from "./emitter";

export interface ApiError {
  error: string;
  message: string;
}

const url = "http://10.0.2.2/api";

export const api = axios.create({
  baseURL: url,
});

let isRefreshing = false;

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!error.response) {
      return Promise.reject({
        error: "NetworkError",
        message: "Problemas de conexão com o servidor",
      });
    }

    const originalConfig = error.config;
    const data: any = error.response?.data;

    if (error.response.status === 401) {
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          const refreshToken = await getStorageString(StorageKeys.refreshToken);

          if (!refreshToken) {
            emitter.emit("SessionExpired");
            isRefreshing = false;
            return Promise.reject({
              error: "AuthError",
              message: "Sessão expirada",
            });
          }

          const response = await api.post("/refresh-token", {
            refreshToken,
          });

          const { token, refreshToken: newRefreshToken } = response.data.data;

          await storeString(StorageKeys.token, token);
          await storeString(StorageKeys.refreshToken, newRefreshToken);
          
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          if (!originalConfig) {
            return Promise.reject({
              error: "AuthError",
              message: "Erro ao atualizar token",
            });
          }

          originalConfig.headers["Authorization"] = `Bearer ${token}`;

          isRefreshing = false;

          return api(originalConfig);
        } catch (refreshError) {
          emitter.emit("SessionExpired");
          isRefreshing = false;
          return Promise.reject({
            error: "AuthError",
            message: "Erro ao atualizar token",
          });
        }
      }
    } else {
      const errorMessage = data.message || "Erro ao processar a solicitação";
      return Promise.reject({
        error: "ApiError",
        message: errorMessage,
        status: error.response.status,
      });
    }

    return Promise.reject(error);
  }
);
