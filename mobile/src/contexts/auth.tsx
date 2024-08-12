import { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { apiErrorHandler } from "../helpers/api-error";
import { StorageKeys, getStorageString, removeStorage, storeString } from "../helpers/async-storage";
import { SignInDTO } from "../models/user.model";
import { api } from "../services/api";
import { emitter } from "../services/emitter";
import { signInService } from "../services/user.service";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  signIn(credentials: SignInDTO): Promise<string>;
  signOut(): Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStorageString(StorageKeys.token)
      .then((token) => {
        if (token) {
          setIsAuthenticated(!!token);

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleLogout = async () => {
      Alert.alert("Alerta", "Sua sessão expirou, faça o login novamente para continuar navegando!");

      await signOut();
    };

    emitter.on("SessionExpired", handleLogout);

    return () => {
      emitter.off("SessionExpired", handleLogout);
    };
  }, []);

  const signIn = async (credentials: SignInDTO): Promise<string> => {
    try {
      const response = await signInService(credentials);
      if (response.data && response.data.token) {
        setIsLoading(true);
        await storeString(StorageKeys.token, response.data.token);
        
        api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
        setIsAuthenticated(!!response.data.token);
        return "";
      } else {
        console.error("Invalid response structure:", response);
        return "Unexpected response format.";
      }
    } catch (error) {
      const errorMessage = apiErrorHandler(error);
      console.error("Error details:", error);
      return errorMessage;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
  
    try {
      await removeStorage(StorageKeys.token);
      await removeStorage(StorageKeys.refreshToken);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error during sign out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, signOut, isLoading}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };

