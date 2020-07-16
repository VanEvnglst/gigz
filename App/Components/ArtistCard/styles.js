import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  cardContainer: { 
    backgroundColor: '#E3E3E3', 
    borderRadius: 8, 
    height: 65,
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  contentContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10, 
    alignItems: 'center'
  },
  imageContainer: {
    width: 40, 
    height: 40,
    borderRadius: 6,
    backgroundColor: 'white', 
    marginRight: 7
  },
  artistDetailsContainer: {
    width: '75%'
  },
  buttonContainer: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#1A1A1A',
    fontWeight: 'bold'
  },
  subTextStyle: {
    fontSize: 10,
    lineHeight: 22,
    color: '#888888',
  }


});