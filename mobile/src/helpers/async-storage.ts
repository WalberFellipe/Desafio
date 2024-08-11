import AsyncStorage from "@react-native-async-storage/async-storage";

export const StorageKeys = {
  token: "Diagonal:token",
  refreshToken: "Diagonal:refreshToken"
}

export const storeString = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    throw new Error("Erro ao salvar dados");
  }
};

export const storeObject = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw new Error("Erro ao salvar dados");
  }
};

export const getStorageString = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value
  } catch (e) {
    throw new Error("Erro ao encontrar dados")
  }
};

export const getStorageObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error("Erro ao encontrar dados")
  }
};

export const removeStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw new Error("Erro ao remover dados")
  }
};