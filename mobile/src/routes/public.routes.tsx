import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { PublicStackNavigation } from "./types";

const PublicStack = createStackNavigator<PublicStackNavigation>();

const PublicRoutes = () => {
  return (
    <PublicStack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <PublicStack.Screen name="LoginScreen" component={LoginScreen} />
    </PublicStack.Navigator>
  );
};

export { PublicRoutes };

