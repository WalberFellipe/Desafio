import { Text, TextProps } from "react-native";
import theme from "../../theme";

interface IHeadingProps extends TextProps {
  text: string;
  color?: string;
  align?: "center" | "auto" | "justify" | "left" | "right";
  type: "XL" | "MD";
}

const Heading = ({ text, type, align, color, ...rest }: IHeadingProps) => {
  return (
    <Text
      style={{
        fontSize: theme.FONT_SIZE[type],
        fontWeight: "bold",
        color: color ?? theme.COLORS.GRAY_900,
        textAlign: align,
      }}
      {...rest}
    >
      {text}
    </Text>
  );
};

export { Heading };
