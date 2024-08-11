import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
  },
  body: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    width: "100%",
    height: 40,
    padding: 10,
    paddingRight: 40,
    paddingLeft: 20,
    borderRadius: 20,
    backgroundColor: theme.COLORS.IVORY,
    alignSelf: "center",
  },
  searchLabel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
    gap: 20,
    paddingHorizontal: 26,
  },
  endPatrolButton: {
    paddingHorizontal: 60,
    paddingVertical: 16,
    gap: 8,
    borderTopWidth: 2,
    borderTopColor: theme.COLORS.GREEN,
    paddingBottom: 32,
    paddingTop: 32,
  },
  bottomSheet: {
    gap: 12,
    marginBottom: 24,
  },
});

export { styles };

