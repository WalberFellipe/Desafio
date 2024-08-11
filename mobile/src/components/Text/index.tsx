import { TextProps, Text as TextRN } from "react-native";
import theme from "../../theme";
interface ITextProps extends TextProps {
  text: string;
  type: "XS" | "SM" | "MD" | "LG" | "XL" | "XXL" | "XXXL";
  align?: "center" | "auto" | "justify" | "left" | "right";
  fontWeight?: "bold" | "normal";
  color?: "WHITE" | "GREEN" | "ORANGE_500" | "BLACK_50" | "GRAY_500";
}

const TextComponent = ({
  text,
  type,
  align,
  fontWeight,
  color,
  ...rest
}: ITextProps) => {
  return (
    <TextRN
      style={{
        fontSize: theme.FONT_SIZE[type],
        fontWeight: fontWeight ? fontWeight : "500",
        color: color ? theme.COLORS[color] : theme.COLORS.BLACK,
        textAlign: align,
      }}
      {...rest}
    >
      {text}
    </TextRN>
  );
};

export { TextComponent };

