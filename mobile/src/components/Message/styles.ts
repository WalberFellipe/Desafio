import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "95%",
    padding: 24,
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 8,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
    color: theme.COLORS.BLACK,
  },
  closeButton: {
    marginTop: 24,
    padding: 10,
    backgroundColor: theme.COLORS.RED_300,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: theme.COLORS.WHITE,
    fontSize: 16,
  },
});

export { styles };

