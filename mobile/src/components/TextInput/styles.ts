import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
  },
  input: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 18,
    fontSize: 12,
    backgroundColor: theme.COLORS.IVORY,
  },
  errorMessage: {
    paddingLeft: 8,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.RED_500,
    fontSize: theme.FONT_SIZE.XS,
  },
  hasError: {
    borderColor: theme.COLORS.RED_500,
    color: theme.COLORS.RED_500,
  },
});

export { styles };

