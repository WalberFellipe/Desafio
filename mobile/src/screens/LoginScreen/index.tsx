import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Alert, Image, View } from "react-native";
import { ButtonComponent } from "../../components/Button";
import { TextComponent } from "../../components/Text";
import { InputTextController } from "../../components/controllers/InputTextController";
import { InputTextPasswordController } from "../../components/controllers/InputTextPasswordController";
import { useAuth } from "../../hooks/auth.hooks";
import { SignInDTO } from "../../models/user.model";
import { AuthenticatedStackProp } from "../../routes/types";
import { styles } from "./styles";


const LoginScreen = () => {
  const navigation = useNavigation<AuthenticatedStackProp>();
  const { signIn } = useAuth();
  const { control, handleSubmit } = useForm<SignInDTO>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: SignInDTO) => {
    try {
      await signIn(data);
      navigation.navigate("Tarefas");
    } catch (error) {
      Alert.alert("Email ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ alignSelf: "center", marginBottom: 60 }}
        source={require("../../../assets/images/Logo-Diagonal.png")}
      />
      <View style={styles.labelDistancing}>
        <TextComponent style={styles.labelTag} text="Usuário" type="XS" />
        <InputTextController
          control={control}
          name="email"
          inputType="email"
          rules={{
            required: "Email obrigatório!",
          }}
          placeholder="Email"
        />
      </View>

      <TextComponent style={styles.labelTag} text="Senha" type="XS" />
      <View style={styles.passwordLabel}>
        <InputTextPasswordController
          control={control}
          name="password"
          rules={{
            required: "Senha obrigatória!",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres",
            },
            maxLength: {
              value: 20,
              message: "A senha deve ter no máximo 20 caracteres",
            },
          }}
          placeholder="Senha"
          textContentType="password"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.loginButton}>
        <ButtonComponent
          title="Entrar"
          onPress={handleSubmit(handleLogin)}
        ></ButtonComponent>
      </View>
    </View>
  );
};

export { LoginScreen };

