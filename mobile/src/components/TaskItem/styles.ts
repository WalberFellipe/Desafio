import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 16,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16
  },
  textSection: { flex: 1 },
  bottomSheetText: {
    fontSize: theme.FONT_SIZE.XXXL,
    marginLeft: 12,
  },
  bottomSheetButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  bottomContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
  },
  daysSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconContainer: {
    justifyContent: "center",
    paddingTop: 5,
  },
  countedAnimals: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
});

export { styles };

