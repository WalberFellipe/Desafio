import { ActivityIndicator, SafeAreaView, View } from "react-native"
import theme from "../../theme"
import { styles } from "./styles"

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color={theme.COLORS.BLACK} />
      </View>
    </SafeAreaView>
  )
}

export { LoadingScreen }
