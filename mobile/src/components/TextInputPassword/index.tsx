import { Eye, EyeClosed } from "phosphor-react-native";
import { useState } from "react";
import {
  Text,
  TextInputProps,
  TextInput as TextInputRN,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../theme";
import { styles } from "./styles";

export interface ITextInputPasswordProps extends TextInputProps {
  placeholder: string;
  errorMessage?: string;
}

const TextInputPassword = ({
  placeholder,
  errorMessage,
  ...rest
}: ITextInputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={[styles.inputContent, !!errorMessage && styles.hasErrorBorder]}
      >
        <TextInputRN
          placeholderTextColor={
            !errorMessage ? theme.COLORS.GRAY_900 : theme.COLORS.RED_500
          }
          secureTextEntry={!showPassword}
          style={[styles.input, !!errorMessage && styles.hasErrorText]}
          placeholder={placeholder}
          {...rest}
        />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export { TextInputPassword };

