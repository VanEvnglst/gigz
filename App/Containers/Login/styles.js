import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    height: Dimensions.get('window').height * 0.15,
  },
  bannerOverlay: {
    position: 'absolute',
    top: -300,
    width: 600, 
    height: 600, 
    borderRadius: 290, 
    overflow: 'hidden', 
    right: 0, 
    left: -100, 
    backgroundColor: '#2C2C2C'
  },
  loginBanner: {
    marginTop: 60, 
    left: -160, 
    top: 110, 
    opacity: 0.56
  },
  contentContainer: {
    height: Dimensions.get('window').height * 0.53,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  headerContainer: { 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    width: '100%',
  },
  headerTextStyle: { 
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#333333', 
    lineHeight: 32 
  },
  subHeaderTextStyle: { 
    marginTop: 5, 
    fontSize: 16, 
    color: '#333333', 
    opacity: 0.5, 
    lineHeight: 21 
  },
  inputContainer: { 
    marginVertical: 20, 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  inputStyle: { 
    borderWidth: 1, 
    width: '85%', 
    height: 51, 
    borderRadius: 25, 
    padding: 15, 
    borderColor: '#70707029',
    marginVertical: 6
  },
  buttonContainer: {
    width: '100%', 
    alignItems: 'center' 
  },
  buttonStyle: { 
    height: 51, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '50%', 
    borderRadius: 25, 
    backgroundColor: '#FA3830' 
  },
  buttonTextStyle: {
    color: '#FFFFFF'
  },
  termsContainer: { 
    width: '75%', 
    marginTop: 15 
  },
  subTextStyle: {
    textAlign: 'center', 
    fontSize: 14, 
    color: '#333333', 
    opacity: 0.5, 
    lineHeight: 21 
  },
  boldSubText: {
    textAlign: 'center',  
    fontSize: 14, 
    color: '#333333',
    lineHeight: 21,
    fontWeight: 'bold', 
  },
  linkTextStyle: {
    opacity: 0.5
  },
  footerContainer: { 
    flex: 1, 
    justifyContent: 'flex-end', 
    marginBottom: 30,
  },
  footerContent: {
    flexDirection: 'row'
  },
});

export default styles;