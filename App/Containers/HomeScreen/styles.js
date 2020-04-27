import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  mapStyle: {
    flex: 1,
    width: width,
    height: '100%',
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
    width: width,
    alignItems: 'center',
  },
  boxContainer: {
    height: height * 0.2,
    width: width - width * 0.1,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'grey',
    shadowOpacity: 1.0,
  },
})
