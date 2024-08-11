import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: theme.COLORS.WHITE,
  },
  labelTag: {
    marginBottom: 5,
    marginLeft: 16,
    fontSize: theme.FONT_SIZE.MD,
  },
  labelDistancing: {
    marginBottom: 40,
  },
  passwordLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  loginButton: {
    paddingHorizontal: 100,
    marginTop: 50,
  },
});

export { styles };

