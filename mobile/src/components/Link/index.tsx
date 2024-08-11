import { Text, TextProps, View } from "react-native";
import { styles } from "./styles";

interface ILinkProps extends TextProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary";
}

const LinkComponent = ({
  title,
  onPress,
  variant = "primary",
  ...rest
}: ILinkProps) => {
  return (
    <View>
      <Text
        style={
          variant === "primary" ? styles.linkPrimary : styles.linkSecondary
        }
        onPress={onPress}
      >
        {title}
      </Text>
      {variant === "primary" && <View style={styles.underline} />}
    </View>
  );
};

export { LinkComponent };
