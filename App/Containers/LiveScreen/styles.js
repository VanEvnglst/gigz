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
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  subscriberContainer: {
    width: width,
    backgroundColor: 'red',
    flex: 1,
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
