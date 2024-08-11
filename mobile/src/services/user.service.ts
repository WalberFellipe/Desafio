import { SignInDTO } from "../models/user.model";
import { api } from "./api";

const signInService = async (data: SignInDTO) => {
  console.log("data signinservice", data);
  try {
    const response = await api.post("/login", data);
    console.log("Response from signInService:", response);
    return response;
  } catch (error) {
    console.error("Error in signInService:", error);
    throw error;
  }
}
export { signInService };

