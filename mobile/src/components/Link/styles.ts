import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  linkPrimary: {
    color: theme.COLORS.BLUE_800,
    fontSize: theme.FONT_SIZE.MD,
    alignSelf: "center",
    marginTop: 24,
  },
  underline: {
    width: "40%",
    alignSelf: "center",
    height: 2,
    backgroundColor: theme.COLORS.BLUE_800,
    marginTop: 2,
  },
  linkSecondary: {
    fontSize: theme.FONT_SIZE.XL,
    fontWeight: "400",
    alignSelf: "center",
    color: theme.COLORS.GREEN,
    marginTop: 24,
  },
});

export { styles };
