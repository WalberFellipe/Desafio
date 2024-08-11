import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.FONT_SIZE.XS,
    borderRadius: 8,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  primary: {
    height: 40,
    width: "100%",
    borderRadius: 20,
    backgroundColor: theme.COLORS.GREEN,
    justifyContent: "center",
    alignSelf: "center",
  },
  secondary: {
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: theme.COLORS.GREEN,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
  textPrimary: {
    fontSize: theme.FONT_SIZE.XL,
    alignSelf: "center",
    color: theme.COLORS.WHITE,
  },
  textSecondary: {
    color: theme.COLORS.BLACK,
    fontSize: theme.FONT_SIZE.XL,
    alignSelf: "center",
  },
});

export { styles };

