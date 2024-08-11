import { StackNavigationProp } from "@react-navigation/stack";

export type PublicStackNavigation = {
  navigate: any;
  LoginScreen: undefined; 
};

export type PublicStackNavigationProp = StackNavigationProp<PublicStackNavigation>;

export type AuthenticatedStackNavigation = {
  Tarefas: undefined;
  LoginScreen: undefined; 
};

export type AuthenticatedStackProp = StackNavigationProp<AuthenticatedStackNavigation>;
