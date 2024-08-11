import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
  },
  inputContent: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    backgroundColor: theme.COLORS.IVORY,
    borderRadius: 18,
    padding: 5,
    paddingLeft: 18,
    fontSize: 12,
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    right: 12,
  },
  errorMessage: {
    paddingLeft: 8,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.RED_500,
    fontSize: theme.FONT_SIZE.XS,
  },
  hasErrorText: {
    color: theme.COLORS.RED_500,
  },
  hasErrorBorder: {
    borderColor: theme.COLORS.RED_500,
  },
});

export { styles };

