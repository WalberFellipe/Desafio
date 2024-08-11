import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export { styles }