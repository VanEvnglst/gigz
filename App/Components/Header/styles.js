import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme/'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  leftButtonStyle: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftTextStyle: {
    fontSize: 15,
    marginLeft: 5,
    color: Colors.text,
  },
  rightStyle: {
    flex: 1,
    alignItems: 'center',
  },
  rightTextStyle: {
    fontSize: 15,
    marginLeft: 5,
    color: Colors.text,
  },
  labelStyle: {
    flex: 3,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.text,
  },
})
