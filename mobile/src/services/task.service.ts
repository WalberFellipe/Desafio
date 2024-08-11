import { api } from "./api";

const getTasks = async () => {
  try {
    const response = await api.get("/tasks");
    console.log("Response from taskService:", response);
    return response.data;
  } catch (error) {
    console.error("Error in getTasks:", error);
    throw error;
  }
};

export { getTasks };

