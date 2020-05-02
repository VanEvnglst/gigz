import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme'

const { height, width } = Dimensions.get('window')

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
  videoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  commentSectionContainer: {
    position: 'absolute',
    bottom: 30,
    width: width * 0.9,
    height: height * 0.25,
  },
  commentListContainer: {
    flex: 3,
  },
  commentInputContainer: {
    flex: 1,
  },
  commentItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  commentLogo: {
    width: 40,
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 20,
    marginRight: 15,
  },
  whiteText: {
    color: Colors.text,
    textAlign: 'center',
  },
})
