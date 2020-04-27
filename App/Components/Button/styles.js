import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme/'

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  labelStyle: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    color: Colors.white,
  },
})
