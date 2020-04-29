import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme'

const { height } = Dimensions.get('window')

const generalPadding = 20

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: height * 0.7,
    backgroundColor: Colors.white,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: Colors.tertiary,
  },
  cardProfileContainer: {
    flex: 1,
    paddingHorizontal: generalPadding,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
  },
  cardImageContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tertiary,
  },
  cardImageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  cardEngagementContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingHorizontal: generalPadding,
    justifyContent: 'center',
  },
  cardCommentContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingHorizontal: generalPadding,
    justifyContent: 'center',
  },
  whiteText: {
    color: Colors.text,
  },
})
