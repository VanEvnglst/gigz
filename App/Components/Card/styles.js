import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme'

const { height } = Dimensions.get('window')

const generalPadding = 20

export default StyleSheet.create({
  
  cardContainer: {
    height: height * 0.20,
    width: '48%',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10
  },
  cardProfileContainer: {
    flex: 1,
    paddingHorizontal: generalPadding,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: height * 0.15,
    borderRadius: 10,
    backgroundColor: '#D8D8D8',
  },
  cardImageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardDetailsContainer: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 8,
    justifyContent: 'space-between',
  },
  liveDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  bandNameText: {
    color: '#1A1A1A',
    fontSize: 12,
    fontWeight: 'bold'
  },
  bandDetailsText: {
    fontSize: 10,
    color: '#888888'
  },
  bandDetailsSeparator: {
    width: 4, 
    height: 4, 
    borderRadius: 2, 
    backgroundColor: '#888888', 
    marginHorizontal: 5
  },
  liveNowContainer: { 
    position: 'absolute', 
    bottom: 10, 
    left: 10, 
    borderRadius: 5, 
    width: '33%', 
    height: 20, 
    backgroundColor: '#FA3830', 
    justifyContent: 'center', 
    alignItems: 'center'}
})
