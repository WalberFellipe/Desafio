import { createStackNavigator } from "@react-navigation/stack";
import { Tarefas } from "../screens/HomeScreen";
import { AuthenticatedStackNavigation } from "./types";

const AuthenticatedStack = createStackNavigator<AuthenticatedStackNavigation>();

const AuthenticatedRoutes = () => {
  return (
    <AuthenticatedStack.Navigator>
      <AuthenticatedStack.Screen
        name="Tarefas"
        component={Tarefas}
        options={{}}
      />
    </AuthenticatedStack.Navigator>
  );
};

export { AuthenticatedRoutes };

