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
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfoContainer: {
    flex: 2,
  },
  profileDescriptionContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    backgroundColor: Colors.secondary,
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderRadius: 50,
  },
  otherInfoContainer: {
    flex: 3,
    backgroundColor: Colors.secondary,
    alignSelf: 'stretch',
    padding: 20,
  },
  whiteText: {
    color: Colors.text,
    textAlign: 'center',
  },
})
