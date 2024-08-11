import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import theme from "../../theme";
import { TextComponent } from "../Text";
import { styles } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
  onPress: () => void;
}

const ButtonComponent = ({
  title,
  onPress,
  variant = "primary",
  loading = false,
  ...rest
}: IButtonProps) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[
        styles.container,
        variant === "primary" ? styles.primary : styles.secondary,
      ]}
      onPress={onPress}
      {...rest}
    >
      {!loading ? (
        <TextComponent
          text={title}
          type="XS"
          style={[
            variant === "primary" ? styles.textPrimary : styles.textSecondary,
          ]}
        />
      ) : (
        <ActivityIndicator
          size="small"
          color={
            variant === "primary" ? theme.COLORS.WHITE : theme.COLORS.BLACK
          }
        />
      )}
    </TouchableOpacity>
  );
};

export { ButtonComponent };
