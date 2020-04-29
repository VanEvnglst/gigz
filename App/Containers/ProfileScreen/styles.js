import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

// const { height } = Dimensions.get('window')

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
