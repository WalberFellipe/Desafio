import {
  TextInputProps,
  TextInput as TextInputRN,
  Text as TextRN,
  View,
} from "react-native";
import theme from "../../theme";
import { TextComponent } from "../Text";
import { styles } from "./styles";
export interface ITextInputProps extends TextInputProps {
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  editable?: boolean;
}

const TextInput = ({
  label,
  placeholder,
  errorMessage,
  editable,
  ...rest
}: ITextInputProps) => {
  return (
    <View style={styles.container}>
      {label && <TextComponent text={label} type="XS" />}
      <TextInputRN
        placeholderTextColor={
          !errorMessage ? theme.COLORS.GRAY_900 : theme.COLORS.RED_500
        }
        style={[styles.input, !!errorMessage && styles.hasError]}
        placeholder={placeholder}
        editable={editable}
        {...rest}
      />
      {errorMessage && (
        <TextRN style={styles.errorMessage}>{errorMessage}</TextRN>
      )}
    </View>
  );
};

export { TextInput };
