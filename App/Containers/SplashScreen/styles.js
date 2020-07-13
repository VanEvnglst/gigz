import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    flex: 1, 
    alignSelf: 'stretch',
    backgroundColor: '#2C2C2C',
  },
  overlay: {
    backgroundColor: '#2C2C2C',
    flex: 1,
    opacity: 0.7
  },
  contentContainer: {
    flex: 1, 
    marginTop: 100, 
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 14, 
    color: '#FFFFFF', 
    opacity: 0.7, 
    marginTop: 25 
  },
  logoStyle: {
    backgroundColor: 'transparent'
  },
})
