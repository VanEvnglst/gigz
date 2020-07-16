import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'App/Theme'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  sectionContainer: {
    paddingHorizontal: 20, 
    marginTop: 20, 
    width: '100%'
  },
  whiteText: {
    color: Colors.text,
    textAlign: 'center',
  },
  cardSectionContainer: { 
    marginTop: 20, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  topArtistHeaderContainer: { 
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionHeaderText: {
    width: '50%',
    color: '#1D262C',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 23
  },
  viewArtistsText: {
    textAlign: 'right',
    width: '50%',
    color: '#FA3830',
    fontSize: 12,
    lineHeight: 22
  },
  subSectionContainer: { 
    marginTop: 20, 
    width: '100%'
  },
  carouselSection: {
    height: height * 0.2, 
    width: '100%'
  },
  carouselBackground: { 
    backgroundColor: 'transparent', 
    width: '100%', 
    height: '100%', 
    alignSelf: 'stretch' 
  },
  overlay: {
    backgroundColor: '#2C2C2C',
    flex: 1,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  carouselImage: {
    borderRadius: 10, 
    width: '45%', 
    height: '90%'
  },
  carouselContentContainer: { 
    marginLeft: 10
  },
  exclusiveTextStyle: { 
    fontSize: 10, 
    lineHeight: 22, 
    opacity: 1.5,
    color: '#FA3830'
  },
  boldText: { 
    lineHeight: 22, 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  detailsTextStyle: { 
    fontSize: 10, 
    lineHeight: 22, 
    color: 'white', 
    opacity: 0.5
  },
  reminderButtonStyle: { 
    backgroundColor: 'white', 
    opacity: 1.5, 
    borderRadius: 25, 
    width: '60%', 
    height: '15%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  reminderTextStyle: { 
    color: '#FA3830', 
    fontSize: 10, 
    lineHeight: 12 
  },


})
